const httpStatus = require('http-status');
const Step = require('../models/step.model');
const StepDone = require('../models/stepDone.model');
const Session = require('../models/session.model');
const SessionController = require('../controllers/session.controller');
const _ = require('lodash');

const getStepDoneInfo = async (step, sessionId) => {
    const stepDoneExist = await StepDone.findOne({ stepId: step._id, sessionId });
    let finalJSON = JSON.parse( JSON.stringify( step ) );
    finalJSON.info = stepDoneExist ? stepDoneExist : null;
    return finalJSON
};

exports.getFromLesson = async (lessonId, sessionId) => {
    let finalJSON = {}
    const steps = await Step.find({ lessonId }).lean();
    finalJSON = steps;
    finalJSON.test = 'hi';
  
    // if(sessionId || sessionId != 'undefined') {
    //     console.log(sessionId)
    //     finalJSON = await Promise.all(
    //         steps.map(step => getStepDoneInfo(step, sessionId))
    //     )
    // }
    return finalJSON;
}
exports.getIdsFromLesson = async (lessonId) => {
    const stepsId = await Step.find({ lessonId }).lean();
    return stepsId;
}

exports.create = async ( req, res, next ) => {
    try {
        const newStep = new Step(req.body);
        const savedStep = await newStep.save();
        res.send(savedStep);
    }

    catch(err) {
        next(err);
    }
}

// /step/done/:sessionId/:stepId
exports.markAsDone = async ( req, res, next ) => {
    try {
        const { authUser } = req;
        const { stepId, sessionId } = req.params;
        const { type, info } = req.body;

        const checkStepDone = await StepDone.findOne({ stepId, sessionId });

        if(checkStepDone)
            return res.status(httpStatus.NOT_ACCEPTABLE).send({
                error:'Step is already done'
            });

        const newStepDone = new StepDone({
            stepId,
            sessionId,
            type,
            userId: authUser.uid,
            info
        });

        if(type == 'PR') {
            const updateOnSession = await SessionController.addPullRequest(sessionId, info)
        }

        if(type == 'ISSUE') {
            const updateOnSession = await SessionController.addIssue(sessionId, info)
        }


        const newStepDoneSaved = await newStepDone.save();
        const updateStep = await Step.findByIdAndUpdate(stepId, { $push: { doneBy: sessionId } });

        res.json({
            newStepDoneSaved,
            updateStep
        })
    }
    catch(err) {
        next(err);
    }
}


exports.markAsDoneV3 = async (req, res, next) => {
     try {
        const { authUser } = req;
        const { stepId } = req.params;
        const step = await Step.findById(stepId);
        if(step) {
            if(_.includes(step.doneBy, authUser.uid)) {
                res.send({
                    message: 'Already marked as done'
                })
            }

            else {
                const StepDoneUpdate = await Step.findByIdAndUpdate(stepId, { $push: { doneBy: authUser.uid } })
                return res.send(StepDoneUpdate)
            }
        }

        else {
            res.status(404).send();
        }
     }
     catch(err) {
         cn
         next(err)
     }
}




exports.deleteDoneStep = async (req, res, next) => {
    console.log('sdadasdasdasdsdss')
    console.log(req.params.id, req.authUser.uid )
    try {
        const { authUser } = req;
        const { id } = req.params;
        //const { sessionId } = req.body;
        const checkUser = await StepDone.findOne({ _id: id, userId: authUser.uid });
        if(checkUser) {
            if(checkUser.type == 'PR') {
                const updateSesson = await SessionController.deletePullRequest(checkUser.sessionId);
            }
            if(checkUser.type == 'ISSUE') {
                const updateSesson = await SessionController.deleteIssue(checkUser.sessionId);
            }
            const deleteCont = await StepDone.findByIdAndDelete(id);
            console.log(checkUser);
            
            res.send(deleteCont)
        }
        else {
            res.status(httpStatus.NOT_FOUND).send({
                error: 'User not Authorized to Delete this step'
            })
        }
    }
    catch(err) {
        next(err)
    }
}