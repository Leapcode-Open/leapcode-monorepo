const express = require('express')
const router = express.Router()
const SessionController = require('../../controllers/session.controller');
const fireAuth = require('../../middlewares/firebaseMiddlewear');

router.get('/', fireAuth.auth, SessionController.getAllUserProjectsFromSessions);
router.post('/',  fireAuth.auth, SessionController.create);
router.get('/:id', fireAuth.auth, SessionController.getOne);
router.get('/slug/:slug', fireAuth.auth, SessionController.getAllDetailsFromSlug);

router.get('/:id/project', fireAuth.auth, SessionController.getProject);

router.get('/prCheck/:id', fireAuth.auth, SessionController.checkPRStatus);

module.exports = router
