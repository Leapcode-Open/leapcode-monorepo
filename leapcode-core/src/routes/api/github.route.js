const express = require('express')
const router = express.Router()
const fireAuth = require('../../middlewares/firebaseMiddlewear');
var github = require('octonode');
var gh = require('parse-github-url');
const GithubController = require('../../controllers/github.controller');
const { Octokit } = require("@octokit/rest");




const getPullRequestData = async (req, res, next) => {
    try {

        const octokit = new Octokit(process.env.GITHUB_USER_API_TOKEN);
        const { authUser } = req;
        const { owner, repo, pullId } = req.params;
        const data = await octokit.pulls.get({
            owner,
            repo,
            pull_number: pullId,
          });

        data.sameUser = data.data.user.login == authUser.username;
        
        res.send(data);
    }
    catch(err) {
        next(err)
    }
  
}

const getIssueData = async (req, res, next) => {
    try {
        const octokit = new Octokit({
            auth: process.env.GITHUB_USER_API_TOKEN
        });
        const { authUser } = req;
        const { owner, repo, issueId } = req.params;
        const data = await octokit.issues.get({
            owner,
            repo,
            issue_number: issueId,
          });

        data.sameUser = data.data.user.login == authUser.username;
        
        res.send(data);
    }
    catch(err) {
        next(err)
    }
  
}



const getAllIssue = async (req, res, next) => {
    try {
        const octokit = new Octokit({
            auth: process.env.GITHUB_USER_API_TOKEN
        });
        const { authUser } = req;
        const { owner, repo, issueId } = req.params;
        console.log(owner, repo)
        const data = await octokit.issues.listForRepo({
            owner,
            repo,
        });

        //data.sameUser = data.data.user.login == authUser.username;
        
        res.send(data);
    }
    catch(err) {
        next(err)
    }
}



const getAllPullRequestData = () => {

}


//router.get('/testcomment', GithubController.addCommentToRepo);


router.get('/:owner/:repo/checkfork', fireAuth.auth, GithubController.getARepo);
router.get('/:owner/:repo/pull/', fireAuth.auth, GithubController.allPulls);
router.get('/:owner/:repo/pull/:pullId', fireAuth.auth, getPullRequestData);
router.get('/:owner/:repo/issue/:issueId', fireAuth.auth, getIssueData);
router.get('/:owner/:repo/issue/', fireAuth.auth, GithubController.allIssues);
router.post('/:owner/:repo/createfork', fireAuth.auth, GithubController.forkRepoToUser);
//router.post('/done/:sessionId/:stepId', fireAuth.auth, StepController.markAsDone)
module.exports = router
