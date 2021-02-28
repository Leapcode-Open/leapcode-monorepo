const Course = require('../models/course.model');
const LessonController = require('./lesson.controller');
const httpStatus = require('http-status');
const PointController = require('./points.controller');
const constants = require('../config/constants');
const _ = require('lodash');
const { auth } = require('firebase-admin');
const getLessonsWithStepIds = async (course) => {
    let modCourse = JSON.parse(JSON.stringify(course));
    const Lessions = await LessonController.getFromCourse(course._id);
    modCourse.lessons = Lessions;
    
    return modCourse;
}

exports.getAllFromProject = async (projectId) => {
    console.log('ppppp', projectId);
    const AllCourses = await Course.find({ projectId }).lean();
    const AllCousesWithLessions = await Promise.all(
        AllCourses.map(course => getLessonsWithStepIds(course))
    );
    return AllCousesWithLessions;
}


exports.getCourseDetail = async (id) => {
    const singleCourse = await Course.findById(id);
    const singleCourseWithLessons = await getLessonsWithStepIds(singleCourse);
    return singleCourseWithLessons
}


exports.create = async ( req, res, next ) => {
    try {
        const course = new Course(req.body);
        const newCourse = await course.save();
        res.status(httpStatus.CREATED).json(newCourse);
    }
    catch(err) {
        next(err);
    }
}

exports.delete = async (req, res, next) => {
    try {
        const { id } = req.params;
        //TODO detete lessons and steps

        const deleted = await Course.findByIdAndDelete(id);
        return res.status(httpStatus.OK).send();
    }
    catch(err) {
        next(err);
    }
}


exports.edit = async (req, res, next) => {
    try {
        console.log(req.body);
        const newCourse = await Course.findByIdAndUpdate(req.params.id, { $set : req.body }, { new: true});
        res.send(newCourse);
    }
    catch(err) {
        next(err)
    }
}

exports.done = async ( req, res, next ) => {
    try {
        const { authUser } = req;
        const { id } = req.params;
        const checkIfExist = await Course.findOne({ _id: id, completedUsers: authUser.uid});

        if(checkIfExist)
            return res.send({
                message:'Alredy Done',
                type:'ADDED_ALREADY',
                checkIfExist
            });

        else {
            //const CourseUpdate = await Course.findByIdAndUpdate(id, { completedUsers: authUser._id }, { new: true});
            const course = await Course.findById(id);
            const points = await PointController.addPoint(req.authUser.uid, constants.COMPLETED_COURSE, course.points);
            const mod = await Course.findByIdAndUpdate(id, { $push : { completedUsers: authUser.uid } }, {new: true});
            return res.send({mod, points});

        }

    }

    catch {
        res.status(500);
    }
}


exports.addSessionToDone = async (req, res, next) => {
    try {
        const { id, sessionId } = req.params;
        const checkIfExist = await Course.findOne({ _id: id, doneBy: sessionId});
        console.log('123455678899', checkIfExist);
        if(checkIfExist)
            return res.send({
                message:'Alredy Done',
                type:'ADDED_ALREADY',
                checkIfExist
            });
        else {
            const course = await Course.findById(id);
            const points = await PointController.addPoint(req.authUser.uid, constants.COMPLETED_COURSE, course.points);
            const mod = await Course.findByIdAndUpdate(id, { $push : { doneBy: sessionId } }, {new: true});
            return res.send({mod, points});
        }
    }
    catch(err) {
        next(err)
    }
}
