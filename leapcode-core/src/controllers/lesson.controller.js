const httpStatus = require('http-status');
const Lesson = require('../models/lesson.model');
const StepController = require('./step.controller');
const CourseController = require('./course.controller');
const courseModel = require('../models/course.model');
const lessonModel = require('../models/lesson.model');
const getStepsId = async (lession) => {
    let stepIds = []
    stepIds = await StepController.getIdsFromLesson(lession._id);
    const lessonJSON = JSON.parse(JSON.stringify(lession));
    lessonJSON.steps = stepIds;
    return lessonJSON
}


exports.getFromCourse = async (courseId) => {
    try {
        const AllLessions = await Lesson.find({ courseId }).lean();
        const AllLessionsWithStepIds = await Promise.all(
            AllLessions.map((lession) => {
                return getStepsId(lession)
            })
        )
        return AllLessionsWithStepIds;
    }
    catch {
        return ;
    }
    
}



exports.getLessonFromSlug = async (req, res, next) => {
    try {
        const { sessionId } = req.query;
        const lession = await Lesson.findOne({ slug: req.params.id }).select('courseId createdOn description doneBy name order progressBy slug steps').lean();
        const steps = await StepController.getFromLesson(lession._id, sessionId);
        //const courseDetails = await CourseController.getCourseDetail(lession.courseId);
       

        let courseDetails = await courseModel.findById(lession.courseId).lean().select('slug order projectId name'); 
        const relatedCourseLession = await Lesson.find({ courseId: lession.courseId }).lean().select('slug order name');
        courseDetails.lessons = relatedCourseLession;
        // const relatedCourseWithLession = await Promise.all(
        //     relatedCourse.map( async c => {
        //         const ll = await Lesson.find({ courseId: c._id }).lean().select('slug order name')
        //         c.lessons = ll;
        //         return c;
        //     })
        // )
        courseDetails = courseDetails;

        let finalJson = JSON.parse(JSON.stringify(lession));
        finalJson.course = courseDetails;
        finalJson.steps = steps;
        res.json(finalJson);
    }

    catch(err) {
        next(err)
    }
}

exports.create = async (req, res, next) => {
    try {
        const lession = new Lesson(req.body);
        const newLession = await lession.save();
        res.status(httpStatus.CREATED).json(newLession);
    }
    catch(err) {
        next(err);
    }
}

exports.delete = async (req, res, next) => {
    try {
        //delete steps
        const deleted = await Lesson.findByIdAndDelete(req.params.id);
        return res.status(httpStatus.OK).send();
    }
    catch(err) {
        next(err);
    }
}

exports.edit = async (req, res, next) => {
    try {
        const newLesson = await Lesson.findByIdAndUpdate(req.params.id, { $set : req.body });
        res.send(newLesson);
    }
    catch(err) {
        next(err)
    }
}

exports.done = async (req, res, next) => {
    try {
        const { id, sessionId } = req.params;
        const { authUser } = req;
        const checkIfExist = await Lesson.findOne({ _id: id, completedUsers: authUser.uid });
        if(checkIfExist)
            return res.json({
                message:'Alredy Done'
            });
        else {
            const mod = await Lesson.findByIdAndUpdate(id, { $push : { completedUsers: authUser.uid } }, {new: true});
            return res.json(mod);
        }
    }
    catch(err) {
        next(err)
    }
}

exports.addSessionToDone = async (req, res, next) => {
    try {
        const { id, sessionId } = req.params;
        const checkIfExist = await Lesson.findOne({ _id: id, doneBy: sessionId });
        if(checkIfExist)
            return res.json({
                message:'Alredy Done'
            });
        else {
            const mod = await Lesson.findByIdAndUpdate(id, { $push : { doneBy: sessionId } }, {new: true});
            return res.json(mod);
        }
    }
    catch(err) {
        next(err)
    }
}