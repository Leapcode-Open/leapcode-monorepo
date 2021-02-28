const express = require('express')
const router = express.Router()
const ProjectController = require('../../controllers/project.controller');
const StepController = require('../../controllers/step.controller');
const fireAuth = require('../../middlewares/firebaseMiddlewear');

router.post('/', StepController.create);
router.post('/done/:sessionId/:stepId', fireAuth.auth, StepController.markAsDone)
router.post('/donev3/:stepId', fireAuth.auth, StepController.markAsDoneV3)

router.post('/remove/done/:id', fireAuth.auth, StepController.deleteDoneStep);

module.exports = router
