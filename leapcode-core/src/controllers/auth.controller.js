const User = require('../models/user.model');
const jwt = require('jsonwebtoken')
const config = require('../config')
const httpStatus = require('http-status');
const uuidv1 = require('uuid/v1');
const firebaseAdmin =  require('../config/firebase');
var Haikunator = require('haikunator');
const BadgeController = require('./badges.controller');
const FeedsController = require('./feeds.controller');
const GithubController = require('./github.controller');
const InviteController = require('./invite.controller');
const SessionController = require('./session.controller');
const sessionModel = require('../models/session.model');
const _ = require('lodash');
const projectModel = require('../models/project.model');


exports.admlogin = async (req, res, next) => {
    try {
        const { uid, token, username, githubInfo } = req.body;
        const userDetails = await firebaseAdmin.auth().verifyIdToken(token);
        if(userDetails) {
            const userExist = await User.findOne({ uid: userDetails.uid });
            if(userExist) {
                if(userExist.role == 'admin') {
                    res.send(userExist);
                }

                else {
                    res.status(httpStatus.NOT_FOUND).send();
                }
            }

            else {
                res.status(httpStatus.NOT_FOUND).send();
            }
        }

    }

    catch(err) {
        next(err)
    }
}


exports.logIn = async (req, res, next) => {
    try {
        const { uid, token, username, githubInfo } = req.body;
        const userDetails = await firebaseAdmin.auth().verifyIdToken(token);
        if(userDetails) {
            const userExist = await User.findOne({ uid: userDetails.uid });
            if(userExist) {
                res.send(userExist);
            }
            else {
                var haikunator = new Haikunator();
                const checkUsername = username == '' ? haikunator.haikunate() : username;
                // const issueText = `Create a profile for ${checkUsername}`;
                // const firstIssue = await GithubController.createIssueOnLeapcode(issueText, ['leapcode']);
                const newUser = new User({
                    uid: userDetails.uid,
                    displayName: userDetails.name,
                    displayPhoto: userDetails.picture,
                    emailVerified: userDetails.email_verified,
                    username: checkUsername,
                    githubUsername: username ? username : null,
                    githubInfo: githubInfo,
                    email: userDetails.email,
                    noAccess: true,
                });

                const savedUser = await newUser.save();
                const checkBadge = await BadgeController.checkUserBadge(userDetails.uid, 'REGISTER');
                const invite = await InviteController.createInviteCode(savedUser.uid, savedUser.username, 'normal');
                res.json(savedUser)
            }

        }

        else {

            res.status(httpStatus.NOT_FOUND).send();
        }            
        
    }

    catch(err) {
        console.log(err)
        next(err);
    }
}



exports.getUserDetails = async (req, res, next) => {
    const { authUser } = req;
    
    const userDetails = await User.findOne({ uid: authUser.uid }).lean();
    const Badges = await BadgeController.getUserBadges(authUser.uid);
    const invite = await InviteController.getInviteDetails(authUser.uid);
  

    res.send({
        userDetails,
        Badges,
        invite
    })
}


exports.getProfile = async (req, res, next) => {

    try {
        const { slug } = req.params;
        let result = {};
        const userDetails = await User.findOne({ username: slug }).select('username uid displayName displayPhoto points githubInfo createdAt githubUsername');
        if(!userDetails)
            return res.status(404).send({
                error: 'User not found'
            });
        result = JSON.parse(JSON.stringify(userDetails));
        //result.sessions = await sessionModel.find({ userId: userDetails.uid });
        //let projectIds =  _.uniq(_.map(result.sessions, 'projectId'));
        //let projects = await projectModel.find().where('_id').in(projectIds).exec();

        result.sessions = [];
        const projects = await SessionController.getAllUserProjectsFromSessionsArray(userDetails.uid);
        result.projects = projects;
        result.badges = await BadgeController.getUserBadges(userDetails.uid);
        return res.json(result)
    }

    catch(err) {
        next(err);
    }
    
}




