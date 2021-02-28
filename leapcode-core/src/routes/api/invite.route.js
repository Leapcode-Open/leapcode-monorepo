const express = require('express')
const router = express.Router();
const fireAuth = require('../../middlewares/firebaseMiddlewear');
const AuthController = require('../../controllers/auth.controller');
const InviteController = require('../../controllers/invite.controller');

router.post('/', fireAuth.auth, InviteController.checkInvite);


module.exports = router
