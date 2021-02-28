const express = require('express')
const router = express.Router()
const SessionController = require('../../controllers/session.controller');
const fireAuth = require('../../middlewares/firebaseMiddlewear');


router.get('/tt', fireAuth.auth, (req, res) => {
    res.send(req.authUser)
});

router.get('/', fireAuth.auth, SessionController.getAll);
router.post('/',  fireAuth.auth, SessionController.create);
router.post('/v3/', fireAuth.auth, SessionController.createv3)
router.get('/:id', fireAuth.auth, SessionController.getOne);
router.get('/slug/:slug', fireAuth.auth, SessionController.getAllDetailsFromSlug);

router.get('/:id/project', fireAuth.auth, SessionController.getProject);
router.post('/:id/pr', fireAuth.auth, SessionController.addPRtoSessionV3);
router.get('/:id/issue', fireAuth.auth, SessionController.checkIssueData);

router.post('/:id/pr/delete', fireAuth.auth, SessionController.deletePRtoSessionV3);
router.post('/:id/deleteSession', fireAuth.auth, SessionController.deleteSessionV3);
router.post('/:id/pr/update', fireAuth.auth, SessionController.updatePRStatus);
router.get('/prCheck/:id', fireAuth.auth, SessionController.checkPRStatus);

module.exports = router
