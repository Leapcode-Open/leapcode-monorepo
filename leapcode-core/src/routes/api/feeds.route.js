const express = require('express')
const router = express.Router();
const fireAuth = require('../../middlewares/firebaseMiddlewear');
const AuthController = require('../../controllers/auth.controller');
const FeedsController = require('../../controllers/feeds.controller');


router.get('/', fireAuth.auth, FeedsController.getUserFeeds);

module.exports = router;
