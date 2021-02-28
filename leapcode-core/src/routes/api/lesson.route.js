const express = require('express')
const router = express.Router()
const LessonController = require('../../controllers/lesson.controller');
const fireAuth = require('../../middlewares/firebaseMiddlewear');


router.post('/', fireAuth.adminAuth, LessonController.create);
router.post('/del/:id',  fireAuth.adminAuth, LessonController.delete);
router.post('/edit/:id',  fireAuth.adminAuth, LessonController.edit);
router.get('/slug/:id', fireAuth.auth, LessonController.getLessonFromSlug);
router.post('/done/:sessionId/:id', fireAuth.auth, LessonController.addSessionToDone)
router.post('/done/:id', fireAuth.auth, LessonController.done);

module.exports = router
