var stream = require('getstream');
const userModel = require('../models/user.model');
const projectModel = require('../models/project.model');

client = stream.connect(
    process.env.STREAM_API_KEY,
    process.env.STREAM_API_SECRET,
);



exports.joined = async (uid) => {

    try {
        const joinedFeed = client.feed('global', 'everyone');
        const newUser = client.feed('user', uid); 
        const newUserFollow = await newUser.follow('global', 'everyone')

        return await joinedFeed.addActivity({
            actor: uid,
            verb: 'registered',
            object: 1
        });
    }

    catch(err) {
        return [];
        console.log(err);
    }
    
}

exports.createProjectFeed = async (projectId) => {
    const newUser = client.feed('project', projectId);
}

exports.followProject = async (uid, projectId) => {
    const newUser = client.feed('user', uid); 
    return await newUser.follow('project', projectId)
}

exports.pickupIssue11 = async (uid, projectId, sessionId) => {
    const userfeed = client.feed('user', uid);
    const foll = await userfeed.follow('project', projectId);
    //const foll2 = await followProject(uid, projectId)
    return await userfeed.addActivity({
        actor: uid,
        verb: 'pickupIssue',
        object:projectId,
        projectId: projectId,
        sessionId: sessionId
    });
}



exports.pickupIssue = async (uid, projectId, sessionId) => {
    try {
        const projectFeed = client.feed('project', projectId);
        const newUser = client.feed('user', uid); 
        const newUserFollow = await newUser.follow('project', projectId)
        console.log(projectFeed);
        return await projectFeed.addActivity({
            actor: uid,
            verb: 'pickupIssue',
            object:projectId,
            projectId: projectId,
            sessionId: sessionId
        });
    }

    catch(err) {
        console.log(err)
        return []
    }
    
}

exports.mergeFeeds = async (uid, projectId, sessionId) => {
    try {
        const projectFeed = client.feed('project', projectId);
        const newUser = client.feed('user', uid); 
        return await projectFeed.addActivity({
            actor: uid,
            verb: 'mergedPR',
            object:projectId,
            projectId: projectId,
            sessionId: sessionId
        });
    }

    catch(err) {
        console.log(err)
        return []
    }
    
}


exports.getUserFeeds = async (req, res, next) =>  {
    const { authUser } = req;
    const user = client.feed('user', authUser.uid); 
    const feeds = await user.get({ limit: 10 });
    const finalWithData = await Promise.all(
        feeds.results.filter(f => f.actor != 'OwDRab2E7nQ3dsH4kzPXmHAhaik2').map(async feed => {
            const userInfo = await userModel.findOne({ uid: feed.actor }).select('displayPhoto username githubUsername displayName');
            let projectInfo = null;
            if(feed.projectId)
                projectInfo = await projectModel.findById(feed.projectId).select('name organisation slug')
            return {
                ...feed,
                userInfo,
                projectInfo
            }
        })
    )

    res.send(finalWithData);
}