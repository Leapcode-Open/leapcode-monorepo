const express = require('express')
const router = express.Router()
const ProjectController = require('../../controllers/project.controller');
const fireAuth = require('../../middlewares/firebaseMiddlewear');

router.get('/', fireAuth.auth, ProjectController.getAll);
//router.get('/v3/', ProjectController.getAllV3);

router.post('/', fireAuth.adminAuth, ProjectController.create);
router.get('/:id', fireAuth.auth, ProjectController.getOne);
router.get('/slug/:id', fireAuth.auth, ProjectController.getOneFromSlug)
router.get('/related/:slug', fireAuth.auth, ProjectController.findRelated);

router.post('/edit/:id', fireAuth.adminAuth, ProjectController.edit);
router.post('/del/:id', fireAuth.adminAuth, ProjectController.delete);
//router.get('/test/', ProjectController.getAll);

module.exports = router
