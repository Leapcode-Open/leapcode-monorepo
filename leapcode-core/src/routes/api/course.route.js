const express = require('express')
const router = express.Router()
const CourseController = require('../../controllers/course.controller');
const fireAuth = require('../../middlewares/firebaseMiddlewear');

router.post('/', CourseController.create);
router.post('/del/:id', CourseController.delete);
router.post('/edit/:id', CourseController.edit);
router.post('/done/:sessionId/:id', fireAuth.auth, CourseController.addSessionToDone)
router.post('/done/:id', fireAuth.auth, CourseController.done);


module.exports = router
