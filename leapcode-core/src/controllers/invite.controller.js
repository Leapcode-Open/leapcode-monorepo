const inviteModel = require("../models/invite.model");
const userModel = require("../models/user.model");
const GithubController = require('./github.controller');
const FeedsController = require('./feeds.controller');

const PointsController = require('./points.controller');
var Haikunator = require('haikunator');
const firebase = require('../config/firebase');


const initalUserOps = async (userDetails) => {
    
    const issueText = `Create a profile for ${userDetails.username}`;
    const firstIssue = await GithubController.createIssueOnLeapcode(issueText, ['leapcode']);
    const feed = await FeedsController.joined(userDetails.uid);
    console.log(issueText)
    const updateUser = await userModel.findByIdAndUpdate(userDetails._id, { firstIssue: firstIssue.number });
    return updateUser;
}




const createInviteCode = async (uid, username, type) => {
    try {
        var haikunator = new Haikunator({
            nouns: [username]
        });

        const newInvite = new inviteModel({
            code: haikunator.haikunate({tokenChars: "LEAPCODE"}),
            uid: uid,
            type
        });
    
        return await newInvite.save();
    }

    catch(err) {
        console.log(err);
        return []
    } 
}

exports.createInviteCode = createInviteCode


exports.doInit = async (req, res, next) => {

    try {

        const allUsers =  await userModel.find();
        const dotask = await Promise.all(
            allUsers.map(async (user) => {
                const a = await createInviteCode(user.uid, user.username, 'normal')
            return ({
                a
            })
        }));
    
        return res.send(dotask)

    }

    catch(err) {
        next(err);
    }
 
}


exports.checkInvite = async (req, res, next) => {
   
    try {
        const { authUser } = req;
        console.log(authUser)
        const { code } = req.body;
        const inviteExist = await inviteModel.findOne({ code });
        if(inviteExist) {
    

            if(inviteExist.type == "normal") {
                const invitedUser = await userModel.findOne({ uid: inviteExist.uid }).select('uid displayName displayPhoto username');

                try {
                    const fi = await firebase.auth().setCustomUserClaims(authUser.uid, {
                        contributor: true
                    });
                }
                catch(ferr) {
                    return res.status(404).send({
                        error: 'Internal Error'
                    })
                }

                /** Initial User Stuff */
                const userDetails = await userModel.findOne({ uid: authUser.uid }).lean();
                if(userDetails) {
               
                    const userUpdated = await initalUserOps(userDetails);
                }



                /* Points to invited user */
                const up = await inviteModel.findByIdAndUpdate(inviteExist._id, { $push: { takers: authUser.uid } });
                const points = await PointsController.addPoint(invitedUser.uid, "INVITED_USER", 100);
                
                return res.send({
                    invite: true,
                    invitee: invitedUser,     
                    type:'USERINVITES'
                 
                })
            }

            else if(inviteExist.type == "custom") {

                try {
              
                    const fi = await firebase.auth().setCustomUserClaims(authUser.uid, {
                        contributor: true
                    });

                
                }
                catch(ferr) {
                    return res.status(404).send({
                        error: 'Internal Error',
                        ferr
                    })
                }


                /** Initial User Stuff */
                const userDetails = await userModel.findOne({ uid: authUser.uid }).lean();
                if(userDetails) {
           
                    const userUpdated = await initalUserOps(userDetails);
                }
           
                const up = await inviteModel.findByIdAndUpdate(inviteExist._id, { $push: { takers: authUser.uid } });
                return res.send({
                    invite: true,
                    invitee: inviteExist.info,
                    type:'CUSTOMINVITE'
                })
            }
            
        }


        else {
           
            return res.status(404).send({
                error: 'Invite does not exist'
            })
        }

    }

    catch(err) {
        console.log(err)
        next(err)
    }
}

exports.getInviteDetails = async (uid) => {
    try {
        const invite = await inviteModel.findOne({ uid });
        const usersListArry = invite.takers;
        usersList = await userModel.find().where('uid').in(usersListArry).select('username displayName displayPhoto').exec();
        
        return ({
            ...JSON.parse(JSON.stringify(invite)),
            usersList
        });
    }

    catch(err) {
        console.log(err);
        return; 
    }
}