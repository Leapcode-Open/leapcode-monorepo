const httpStatus = require('http-status');
const Session = require('../models/session.model');
const Project = require('../models/project.model');
const ProjectController = require('./project.controller');
var Haikunator = require('haikunator')
var gh = require('parse-github-url');
const { Octokit } = require("@octokit/rest");
const PointController = require('./points.controller');
const BadgesController = require('./badges.controller');
const FeedController = require('./feeds.controller');
const GithuhController = require('./github.controller');
const { CREATE_SESSION, CREATE_SESSION_POINTS } = require('../config/constants');
const _ = require('lodash');
const { findByIdAndUpdate } = require('../models/session.model');
const lessonModel = require('../models/lesson.model');
const courseModel = require('../models/course.model');
const { uniq } = require('lodash');
const projectModel = require('../models/project.model');

exports.create = async (req, res, next) => {

    var haikunator = new Haikunator();

    try {
        const { projectId } = req.body;

        if(!projectId) {
            res.status(httpStatus.BAD_REQUEST).send({
                error: 'Project not Found'
            })
        }
        const newSession = new Session({
            projectId,
            userId: req.authUser.uid,
            name: haikunator.haikunate(),
            completed: false
        });
        const addPoints = await PointController.addPoint(req.authUser.uid, CREATE_SESSION, CREATE_SESSION_POINTS);
        const newSessionSave = await newSession.save();
        res.send(newSessionSave)
    }
    catch(err) {
        next(err)
    }
}


exports.createv3 = async  (req, res, next) => {
    try {

        var haikunator = new Haikunator();
        const { authUser } = req;
        const { projectId, issue, issueId, firstTime } = req.body;

        if(!projectId) {
            res.status(httpStatus.BAD_REQUEST).send({
                error: 'Project not Found'
            })
        }

        const newSession = new Session({
            projectId,
            userId: req.authUser.uid,
            name: haikunator.haikunate(),
            completed: false,
            issueExist: true,
            issue: issue,
            issueId: issue.id,
            firstTime
        });


        const ProjectDetails = await projectModel.findById(projectId);
        const { name, owner } = gh(ProjectDetails.githubUrl);
        let addCommentToIssue = await GithuhController.addCommentToRepo(owner, name, issueId, `Heeyo! @${authUser.githubUsername} is interested in working on this issue - via https://leapcode.io`)

        const addPoints = await PointController.addPoint(req.authUser.uid, CREATE_SESSION, CREATE_SESSION_POINTS);
        const badges = await BadgesController.checkSessionBadges(req.authUser.uid, 'NEWSESSION')
        const newSessionSave = await newSession.save();
        const feed = await FeedController.pickupIssue(req.authUser.uid, projectId, newSessionSave._id);
        res.send(newSessionSave)
    }
    catch(err) {
        next(err)
    }
}


const getProjectFromIdAndAttachToSession = async (session) => {
    const projectDetails = await Project.findOne({ _id: session.projectId});
    let sessionjson = JSON.parse(JSON.stringify(session));
    sessionjson.project = projectDetails;
    return sessionjson;
} 



exports.getAllUserProjectsFromSessionsv2 = async (req, res, next) => {
    try {
        const { authUser } = req;
        const AllSessions = await Session.find({ userId: authUser.uid  });
        const AllProjectsList = [];
        const AllSessionWithProject = await Promise.all(
            AllSessions.map(session => getProjectFromIdAndAttachToSession(session))
        )
        //const uniqProjects = await _.uniqBy(AllSessionWithProject.map((ses) => ses.project), '_id');
        const uniqProjects = await AllSessionWithProject.map((ses) => ses.project);

        console.log();
        res.send(_.uniqBy(uniqProjects, 'name'));
    }
    catch(err) {
        next(err)
    }
}


exports.getAllUserProjectsFromSessionsArray = async (uid) => {
    try {
        const AllLessons = await lessonModel.find({ completedUsers: uid });
        let allCoursesIds = await AllLessons.map((lesson) => lesson.courseId);
        allCoursesIds = await _.uniqWith(allCoursesIds, _.isEqual);
        const allSelectedCourses = await courseModel.find().where('_id').in(allCoursesIds).select('projectId').exec();
        let allProjectIds =  await allSelectedCourses.map((c) => c.projectId);
        allProjectIds = _.uniqWith(allProjectIds, _.isEqual);
        
        const allProjects = await projectModel.find().where('_id').in(allProjectIds).exec();

        return allProjects;
    }

    catch(err) {
        return []
    }
}


exports.getAllUserProjectsFromSessions = async (req, res, next) => {
    try {
        const { authUser } = req;
        const AllLessons = await lessonModel.find({ completedUsers: authUser.uid });
        let allCoursesIds = await AllLessons.map((lesson) => lesson.courseId);
        allCoursesIds = await _.uniqWith(allCoursesIds, _.isEqual);
        const allSelectedCourses = await courseModel.find().where('_id').in(allCoursesIds).select('projectId').exec();
        let allProjectIds =  await allSelectedCourses.map((c) => c.projectId);
        allProjectIds = _.uniqWith(allProjectIds, _.isEqual);
        
        const allProjects = await projectModel.find().where('_id').in(allProjectIds).exec();

        return res.send(allProjects);
    }

    catch(err) {
        next(err);
    }
}




exports.getAll = async (req, res, next) => {
    try {
        const { authUser } = req;
        const { projectId } = req.query;
        const AllSessions = await Session.find({ userId: authUser.uid, projectId });
        const AllProjectsList = [];
        const AllSessionWithProject = await Promise.all(
            AllSessions.map(session => getProjectFromIdAndAttachToSession(session))
        )
        const uniqProjects = await _.uniqBy(AllSessionWithProject.map((ses) => ses.project), '_id');
        res.send(AllSessionWithProject);
    }
    catch(err) {
        next(err)
    }
}


exports.getOne = async (req, res, next ) => {
    try {
        const { authUser } = req;
        const { id } = req.params
        const thisSession = await Session.findById(id);
        if(authUser.uid == thisSession.userId)
            res.send(thisSession);

        else 
            res.status(httpStatus.UNAUTHORIZED).send();
        res.send(AllSessions);
    }
    catch(err){
        next(err)
    }
}


exports.getAllDetailsFromSlug = async (req, res, next) => {

    try {
        const { authUser } = req;
        const { slug } = req.params
        const thisSession = await Session.findOne({ slug });
        //const thisProject = await ProjectController.getCompleteProjectDetailsByID(thisSession.projectId);
        const thisProject = await Project.findById(thisSession.projectId);

        let finalJSON = JSON.parse(JSON.stringify(thisSession));
        if(thisSession.pullRequestId) {
            const { name, owner } = gh(thisProject.githubUrl);
            finalJSON.ifMerged = await GithuhController.checkIfMerged(owner, name, thisSession.pullRequestId)
        }
        finalJSON.project = thisProject;
        res.send(finalJSON)

    }
    catch(err) {
        next(err);
    }
}


exports.getProject = async (req, res, next ) => {
    try {
        const { authUser } = req;
        const { id } = req.params
        const thisSession = await Session.findById(id);
        const ProjectDetails = ProjectController.getCompleteWithIdNoRoute(thisSession.projectId);
        let thisSessionJSON = JSON.parse(JSON.stringify(thisSession));
        thisSessionJSON.project = ProjectDetails;
        res.send(thisSessionJSON);
    }
    catch(err) {
        next(err);
    }
}
 


exports.addPullRequest = async (id, info) => {
    try {
        const update = await Session.findByIdAndUpdate(id, { $set: { prExist: true, pullRequest: info } });
        return update
    }
    
    catch(err) {
        return false
    }
}

exports.deletePullRequest = async (id) => {
    try {
        const update = await Session.findByIdAndUpdate(id, { $unset: { prExist: 1, pullRequest: 1 } });
        return update
    }
    
    catch(err) {
        return false
    }
}

exports.addIssue = async (id, info) => {
    try {
        const update = await Session.findByIdAndUpdate(id, { $set: { issueExist: true, issue: info } });
        return update;
    }
    
    catch(err) {
        return false
    }
}

exports.deleteIssue = async (id) => {
    try {
        const update = await Session.findByIdAndUpdate(id, { $unset: { issueExist: 1, issue: 1 } });
        return update;
    }
    
    catch(err) {
        return false
    }
}


exports.checkPRStatus = async (req, res, next ) => {
    try {
        const octokit = new Octokit({ auth: process.env.GITHUB_USER_API_TOKEN});
        const { id } = req.params;
        const SessionDetails = await Session.findById(id);
        const ProjectDetails = await Project.findById(SessionDetails.projectId);
        const { pullRequest } = SessionDetails;
        const { githubUrl } = ProjectDetails;
        const { name, owner } = gh(githubUrl);
      
        if(pullRequest) {
            const pullRequestData = await octokit.pulls.get({
                owner,
                repo: name,
                pull_number: pullRequest.number,
            });

            const updateDatePRdata = await Session.findByIdAndUpdate(id, { $set: { pullRequest: pullRequestData.data } })
            res.send(pullRequestData)
        }

        else {
            res.send({
                error: 'Pull Request is not attached yet'
            })
        }

        //res.send();

        return
    }
    catch(err) {
        next(err)
    }
}



exports.findFirstIssueSession = async (userId, projectId) => {
    try {
        const firstSession = await Session.findOne({ userId, projectId, firstTime: true}).lean();
        return firstSession
    }

    catch(err) {
        console.log(err);
        return;
    }
}


exports.deleteSessionV3 = async (req, res, next) => {
    try {
        const { authUser } = req;
        const { id } = req.params; 
        const sessionExist = await Session.findById(id);
        if(sessionExist) {
            if(sessionExist.userId != authUser.uid) {
                return res.status(401).send({
                    error: 'You are not the owner of this session'
                })
            }

            else {
                const deleteSessionCall = await Session.findByIdAndDelete(id);
                return res.send(deleteSessionCall);
            }
        }
    }

    catch(err) {
        next(err)
    }
}

exports.deletePRtoSessionV3 = async (req, res, next) => {
    try {
        const { authUser } = req;
        const { id } = req.params; 
        const sessionExist = await Session.findById(id);
        if(sessionExist) {
            if(sessionExist.userId != authUser.uid) {
                return res.status(401).send({
                    error: 'You are not the owner of this session'
                })
            }

            if(sessionExist.pullRequest) {

                const ProjectDetails = await Project.findById(sessionExist.projectId);
                const { name, owner } = gh(ProjectDetails.githubUrl);
                //let addCommentToIssue = await GithuhController.addCommentToRepo(owner, name, sessionExist.issue.number, `@${authUser.githubUsername} removed #${sessionExist.pullRequest.number} as a pull request for this issue - via https://leapcode.io`)

                const updateSession = await Session.findByIdAndUpdate(id, {
                    pullRequestId: null,
                    pullRequest: null,
                    prExist: false
                }, { new: true })

                return res.send(updateSession)
            }

            else {
                return res.send({
                    error: 'No pull request found'
                });
            }
        }
    }
    catch(err) {
        next(err)
    }
}


exports.checkIssueData = async ( req, res, next) => {
    try {
        const { authUser } = req;
        const { id } = req.params;
        const currentSession = await Session.findById(id);
  
        if(currentSession) {
            const projectDetails = await Project.findById(currentSession.projectId);
            if(!projectDetails) 
                return res.send({ error: 'Project not found' });
            const { name, owner } = gh(projectDetails.githubUrl);
            const IssueData = await GithuhController.getIssue(owner, name, currentSession.issue.number);
            if(IssueData) {
                const updateSession = await Session.findByIdAndUpdate(id, { issue: IssueData });
                return res.send(IssueData);
            }
            else {
                return res.send({ error: 'Issue not found' })
            }
        }
        else {
            return res.send({
                error: 'Session not found'
            })
        }


    }
    catch(err) {
        next(err);
    }
}
exports.addPRtoSessionV3 = async (req, res, next) => {
    try {
        const { authUser } = req;
        const { pullRequestId, pullRequest } = req.body;
        const { id } = req.params;
        
        const sessionExist = await Session.findById(id);
        if(sessionExist) {
            if(sessionExist.userId != authUser.uid)
                return res.status(401).send({
                    error: 'Not Authorized'
                })

            else {


                const ProjectDetails = await Project.findById(sessionExist.projectId);
                const { name, owner } = gh(ProjectDetails.githubUrl);
                //let addCommentToIssue = await GithuhController.addCommentToRepo(owner, name, sessionExist.issue.number, `@${authUser.githubUsername} linked #${pullRequestId} as a pull request for this issue - via https://leapcode.io`)

                const updateSession = await Session.findByIdAndUpdate(id, {
                    pullRequest,
                    pullRequestId,
                    prExist: true
                }, { new: true });


                //const Link

                return res.send(updateSession)
            }
        }

        else {
            return res.status(404).send({
                error: 'Session Not found'
            });
        }
    }

    catch(err) {
        next(err);
    }
}




exports.updatePRStatus = async (req, res, next) => {
    try {
        const { authUser } = req;
        const { id } = req.params;

        const session = await Session.findById(id);
        if(session) {
            if(session.userId != authUser.uid)
                return res.send({
                    error: 'User not authorized'
                })

            if(session.pullRequest) {
                if(!session.pullRequest.merged) {
                    const projectDetails = await Project.findById(session.projectId);
                    const { name, owner } = gh(projectDetails.githubUrl);
                    let PRStatus = await GithuhController.getPullRequest(owner, name, session.pullRequest.number);
        
                    if(PRStatus) {
                        if(PRStatus.state != session.pullRequest.state) {
                            let justMerged = false;
                            if(PRStatus.merged) {
                                justMerged = true;
                                const addToFeed = await FeedController.mergeFeeds(authUser.uid, projectDetails.id, session._id);
                                const AddPoints = await PointController.addPoint(authUser.uid, 'MERGED_PR', 100);
                            }
                            
                            const updateSession = await Session.findByIdAndUpdate(session._id, { pullRequest: PRStatus });

                            return res.send({
                                changed: true,
                                state: PRStatus.state,
                                merged: PRStatus.merged,
                                pullRequest: PRStatus,
                                justMerged,
                            });
                        }

                        else {
                            return res.send({
                                changed: false,
                                pullRequest: PRStatus,
                            })
                        }
                    }

                    else {
                        return res.send({
                            error: 'Pull Request Not Valid'
                        })
                    }
                }

                else {
                    return res.send({
                        error: 'Already merged', 
                    });
                }
            }

            else {
                return res.send({
                    error: 'No Pull Request Attached'
                })
            }
        }

        else {
            return res.send({
                error: 'Session Not Found'
            })
        }
    }

    catch(err) {
        next(err);
    }
}