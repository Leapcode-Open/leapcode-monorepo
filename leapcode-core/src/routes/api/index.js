'use strict'
const express = require('express')
const router = express.Router()
const authRouter = require('./auth.route')
const projectRouter = require('./project.route');
const CourseRouter = require('./course.route');
const LessonRouter = require('./lesson.route');
const SessionRouter = require('./session.route');
const StepRouter = require('./steps.route');
const GithubRouter = require('./github.route');
const Sessionv3Router = require('./sessionv3.route')
const ProfileRouter = require('./profile.route')
const FeedRouter = require('./feeds.route');
const InviteRouter = require('./invite.route');
const projectModel = require('../../models/project.model');


router.get('/status', (req, res) => { res.send({status: 'OK'}) }) // api status

router.use('/auth', authRouter) // mount auth paths

router.use('/project', projectRouter);

router.use('/course', CourseRouter);

router.use('/lesson', LessonRouter);

router.use('/session', SessionRouter);

router.use('/step', StepRouter);

router.use('/github', GithubRouter);

router.use('/profile', ProfileRouter)

router.use('/feed', FeedRouter);

router.use('/invite', InviteRouter)

router.use('/v3/session', Sessionv3Router)
module.exports = router


router.get('/tete', async (req, res) => {

  console.time('simple')
    let a = await projectModel.find();
  console.timeEnd('simple')

  console.time('simple--lean')
  let b = await projectModel.find().lean();
  console.timeEnd('simple--lean')

  console.time('simple--lean--limi')
  let c = await projectModel.find().limit(1).lean();
  console.timeEnd('simple--lean--limi')

  return res.send({a, b, c});
})



