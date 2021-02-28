const Point = require('../models/points.model');
const User = require('../models/user.model');
const Badges = require('../models/badges.model');
const firebase = require('../config/firebase');
const sessionModel = require('../models/session.model');


const USERBADGES = {
    newUser: {
        bid: 'newUser',
        name: 'Created an account on Leapcode',
        image: 'Badges/007-heart.svg',
    }
};


const SESSIONBADGES = {
    firstSession: {
        bid: 'firstSession',
        name: 'Picked up first issue',
        image: 'Badges/014-flag.svg',
    },
    thirdSession: {
        bid: 'thirdSession',
        name: 'Picked up third issue',
        image: 'Badges/017-badge-1.svg',
    }
}


exports.addBadge = async (uid, badge) => {
    try {
        const newBadge = new Badges({
            uid,
            badge
        });
        const s = await newBadge.save();
    
        return s;
    }
    catch(err){
        return false
    }
}


exports.getUserBadges = async (uid) => {
    try {
        const UserBadges = await Badges.find({ uid });
        return UserBadges
    }
    catch(err) {
        console.log(err);
        return ([])
    }
}







exports.checkUserBadge = async (uid, type) => {
    try {
        if(type == 'REGISTER'){
            const newBadge = new Badges({
                ...USERBADGES.newUser,
                uid
            });
            return newBadge.save();
        }

        return []
    }

    catch(err) {
        return []
    }
    
}


exports.checkSessionBadges = async (uid, type) => {
    try {
        if(type == 'NEWSESSION') {
            const userSessionCount = await sessionModel.countDocuments({ userId:uid });
            
            //Badge for first issue pick up
            if(userSessionCount == 0) {
                const newBadge = new Badges({
                    ...SESSIONBADGES.firstSession,
                    uid
                });
                return newBadge.save();
            } 
            

            //Badge for third issue pick up
            if(userSessionCount == 2) {
                const newBadge = new Badges({
                    ...SESSIONBADGES.thirdSession,
                    uid
                });
                return newBadge.save();
            } 
        }

        return []
    }

    catch(err) {
        return []
    }
}