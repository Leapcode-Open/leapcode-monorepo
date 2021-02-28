const express = require('express')
const router = express.Router();
const fireAuth = require('../../middlewares/firebaseMiddlewear');
const AuthController = require('../../controllers/auth.controller');
router.get('/:slug', fireAuth.auth, AuthController.getProfile);
module.exports = router
