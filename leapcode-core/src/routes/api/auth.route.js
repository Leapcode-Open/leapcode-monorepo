const express = require('express')
const router = express.Router()
const authController = require('../../controllers/auth.controller')
const validator = require('express-validation')
const { create } = require('../../validations/user.validation')
const auth = require('../../middlewares/authorization');
const fireAuth = require('../../middlewares/firebaseMiddlewear');
const BadgesController = require('../../controllers/badges.controller');
const FeedsController = require('../../controllers/feeds.controller');
const userModel = require('../../models/user.model')

router.post('/login', authController.logIn) // login
router.get('/user', fireAuth.auth, authController.getUserDetails);
router.post('/adlogin', authController.admlogin);






// router.get('/badgesinite', async (req, res) => {
//     const users = await userModel.find();

//     const badgesinit = Promise.all(
//         users.map(async user => {
//             return await FeedsController.joined(user.uid);
//         })
//     )
//     res.send(badgesinit);
// })

module.exports = router





