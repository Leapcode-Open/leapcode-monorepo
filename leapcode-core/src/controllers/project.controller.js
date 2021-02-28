const Project = require('../models/project.model');
const Session = require('../models/session.model');
const httpStatus = require('http-status');
const CourseController = require('./course.controller');
const userModel = require('../models/user.model');
const { truncate } = require('lodash');
const GithubController = require('./github.controller');
const sessionModel = require('../models/session.model');
const SessionController = require('./session.controller');
const courseModel = require('../models/course.model');
const lessonModel = require('../models/lesson.model');
exports.create = async (req, res, next) => {

    try {

        const githubInfo = await GithubController.getRepoDetails(req.body.organisation, req.body.name);
        const project = new Project({
            ...req.body,
            githubInfo
        });
        const savedProject = await project.save();
        res.status(httpStatus.CREATED).json({
            project: savedProject
        });
    }
    catch(err) {
        next(err);
    }
};


const getCoursesFromProject = async (project) => {
    let courses = []
    let p = JSON.parse(JSON.stringify(project));
    courses = await CourseController.getAllFromProject(project._id);
    p.courses = courses;
    return p;
}









exports.getCompleteProjectDetailsByID = async (id) => {
    try {
        let finalProjectJSON = {}
        let singleProject = await Project.findOne({ _id: id });
        finalProjectJSON = JSON.parse(JSON.stringify(singleProject));
        finalProjectJSON.courses = [];
        finalProjectJSON.sessions = [];
        if(singleProject) {
            finalProjectJSON = await getCoursesFromProject(singleProject);
            
        }
            
        
        return finalProjectJSON;
    }
    catch(err) {
        return ([])
    }
}

exports.getCompleteWithIdNoRoute = async (id) => {
    try {
       
      
        let finalProjectJSON = {}
        let singleProject = await Project.findOne({ slug: id });
        finalProjectJSON = JSON.parse(JSON.stringify(singleProject));
        finalProjectJSON.courses = [];
        if(singleProject)
            finalProjectJSON = await getCoursesFromProject(singleProject);
        
        return finalProjectJSON;
    }

    catch(err){
        console.log(err)
        return ([])
    }
        
    

}




exports.getAll = async (req, res, next) => {
    try {
        const { v3 } = req.query;
        const allProjects = await Project.find({ active: true });
        if(v3 != 'true'){
            const ProjectWithCourses = await Promise.all(
                allProjects.map(project => getCoursesFromProject(project))
            )
            res.json(ProjectWithCourses)
        }

        else {
            res.json(allProjects)
        }
            
    }
    catch(err) {
        next(err)
    }
}

exports.getOneFromSlug = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { authUser } = req;

        let finalProjectJSON = {}
        let singleProject = await Project.findOne({ slug: id }).lean();
        if(!singleProject)
            return res.status(404).send({ error: 'Project not found', code:404 })
        //finalProjectJSON = JSON.parse(JSON.stringify(singleProject));
        finalProjectJSON=singleProject;
        finalProjectJSON.courses = [];
        finalProjectJSON.sessions = [];
        if(singleProject) {
            //finalProjectJSON = await getCoursesFromProject(singleProject);
            //finalProjectJSON.sessions = await Session.find({ projectId: singleProject._id }).lean();

            const allcourses = await courseModel.find({ projectId: singleProject._id }).lean();
            const allcoursesNew = await Promise.all(
                allcourses.map(async c => {
                    const ll = await lessonModel.find({ courseId: c._id }).select('completedUsers doneBy slug order name').lean();
                    c.lessons = ll;
                    return c
                })
            )
            finalProjectJSON.courses = allcoursesNew;
            // finalProjectJSON = await Promise.all([

            // ])
        }
              //finduser
              const allSessionsUsers = await Session.find({ projectId: singleProject._id }).distinct('userId').lean();
              let userList = []
              userList = await userModel.find().where('uid').in(allSessionsUsers).select('displayName displayPhoto githubUsername points username').lean().exec();
              finalProjectJSON.contributors = userList;


                    
        if(authUser) {
            const firstSession = await SessionController.findFirstIssueSession(authUser.uid, singleProject._id);
            finalProjectJSON.firstSession = firstSession;
            finalProjectJSON.test = "hi"
        }

        
        res.json(finalProjectJSON);        
    }
    catch(err) {
        console.log('asds')
        next(err);
    }
}

exports.getOne = async ( req, res, next ) => {
    try {
        const { id } = req.params;
        let finalProjectJSON = {}
        let singleProject = await Project.findById(id);
        finalProjectJSON = JSON.parse(JSON.stringify(singleProject));
        finalProjectJSON.courses = [];
        if(singleProject)
            finalProjectJSON = await getCoursesFromProject(singleProject);

        
        // //finduser
        // const allSessionsUsers = Session.find({ projectId:id }).distinct('userId');
        // let userList = []
        // userList = await userModel.find().where('_id').in(ids).exec();
        // finalProjectJSON.contributors = userList;

        res.json(finalProjectJSON);        
    }
    catch(err) {
        next(err);
    }
}



exports.getAllV3 = async (req, res, next) => {
    try {
        const allProjects = await Project.find({ active: true });

    }

    catch(err) {

    }
}



exports.edit = async (req, res, next) => {
    const { id } = req.params;
    const githubInfo = await GithubController.getRepoDetails(req.body.organisation, req.body.name);

    try {
        const editedProject = await Project.findByIdAndUpdate({ _id: id }, { $set : { ...req.body, githubInfo} }, { new: true });
        res.json(editedProject);
    }
    catch(err) {
        next(err)
    }

}

exports.delete = async (req, res, next) => {
    try {
        //delete steps
        const deleted = await Project.findByIdAndDelete(req.params.id);
        return res.status(httpStatus.OK).send();
    }
    catch(err) {
        next(err);
    }
}


exports.findRelated = async (req, res, next) => {
    try {
        const { slug } = req.params;
        const slugproject = await Project.findOne({ slug }).lean();
        let relatedProjects = [];

        if(!slugproject) {
            res.status(404).send();
        }

        if(slugproject.githubInfo) {
            console.log('ttt')
            if(slugproject.githubInfo.languages) {
                const projLanguages = Object.keys(slugproject.githubInfo.languages);
                let langStr = '';
                projLanguages.forEach((pl, index) => {
                    langStr+=`${pl}${projLanguages.length == index+1 ? '': '|'}`
                })
                //TODO - Find a scaleable way
                const AllProjects = await Project.find({ active: true, slug: { '$ne': slug } }).lean();
                AllProjects.forEach(proj => {
                    if(proj.githubInfo) {
                        if (projLanguages.indexOf(proj.githubInfo.language) > -1) {
                            relatedProjects.push(proj);
                        } else {
                            //Not in the array
                        }
                    }

                    else {

                    }
                })
                res.send(relatedProjects)
            }
        }

        else {
            res.send(relatedProjects)
        }
       
    }
    catch(err) {
        next(err)
    }
}