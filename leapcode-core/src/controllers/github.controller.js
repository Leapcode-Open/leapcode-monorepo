var github = require('octonode');
var gh = require('parse-github-url');
const Session = require('../models/session.model');

const { Octokit } = require("@octokit/rest");
const { createAppAuth } = require("@octokit/auth-app");
const config = require('../config');

exports.allIssues = async (req, res, next) => {
    try {
        const octokit = new Octokit({
            auth: process.env.GITHUB_USER_API_TOKEN
        });
        const { authUser } = req;
        const { owner, repo, issueId } = req.params;
        let { labels } = req.query;
        labels = decodeURI(labels);
        // const data = await octokit.issues.listForRepo({
        //     owner,
        //     repo,
        //     state: 'open',
        //     assignee: 'none',
        //     labels: labels == 'nill' ? '' : labels
        // });





        const data = await octokit.search.issuesAndPullRequests({
            q:`repo:${owner}/${repo}+state:open${labels == 'nill' ? '' : `+label:${labels}` }+-linked:pr+no:assignee`
        })


        console.log(data);
        const allIssues = data.data.items;

        const allIssuesWithLeapcodeUsers = await Promise.all(
            allIssues.map(async (issue) => {
                let issueNew = issue;
                issueNew.sessions = await Session.findOne({ issueId: issue.id  });
                return issueNew
            })
        );


        res.send(allIssuesWithLeapcodeUsers);
    }
    catch(err) {
        next(err)
    }
}



exports.getIssue = async (owner, repo, issue_number) => {
    try {
        const octokit = new Octokit({
            auth: process.env.GITHUB_USER_API_TOKEN
        });

     
        const data = await octokit.issues.get({
            owner,
            repo,
            issue_number
        });
        console.log(data);
        return data ? data.data: null;

    }
    catch(err) {
        return null;
    }
}


exports.allPulls = async (req, res, next) => {
    try {
        const octokit = new Octokit({
            auth:  process.env.GITHUB_USER_API_TOKEN
        });

        const { authUser } = req;
        const { owner, repo, issueId } = req.params;
        console.log(owner, repo)
        const data = await octokit.pulls.list({
            owner,
            repo,
            state: 'open',
        });
        console.log(authUser);
        const userPulls = data.data.filter(( pull => pull.user.login == authUser.githubUsername))
        res.send(userPulls);
    }
    catch(err) {
        next(err)
    }
}


exports.checkIfMerged = async (owner, repo, pull_number) => {
    try {
        const octokit = new Octokit({
            auth:  process.env.GITHUB_USER_API_TOKEN
        });

        console.log(owner, repo, pull_number);
        let pullData = null;
        pullData = await octokit.pulls.checkIfMerged({
            owner,
            repo,
            pull_number,
        });

        return pullData.status;
    }

    catch(err) {
        console.log(err);
        return ;
    }
}

exports.getPullRequest = async (owner, repo, pull_number) => {
    try {
        const octokit = new Octokit({
            auth:  process.env.GITHUB_USER_API_TOKEN
        });

        console.log(owner, repo, pull_number);
        let pullData = null;
        pullData = await octokit.pulls.get({
            owner,
            repo,
            pull_number,
        });

        return pullData.data;
    }

    catch(err) {
        console.log(owner, repo, pull_number);
        console.log(err);
        return ;
    }
}



exports.commentOnIssue = async (owner, repo, issue_number, body) => {
    try {
        const octokit = new Octokit({
            authStrategy: createAppAuth,
            auth: {
                id: process.env.GITHUB_APP_ID,
                privateKey: process.env.GITHUB_APP_PRIVATE_KEY.replace(/\\n/g, '\n'),
                installationId: process.env.GITHUB_APP_INSTALLATIONID
            },
        }); 


        const comment = 
            await octokit.issues.createComment({
            owner,
            repo,
            issue_number,
            body
        });
        console.log(assignee);

        return assignee
        
    }

    catch(err) {
        console.log(err)
        return false
    }
}



exports.assignUserToIssueForPR = async (owner, repo, issue_number, pull_id, user_id) => {
    try {
        const octokit = new Octokit({
            authStrategy: createAppAuth,
            auth: {
                id: process.env.GITHUB_APP_ID,
                privateKey: process.env.GITHUB_APP_PRIVATE_KEY.replace(/\\n/g, '\n'),
                installationId: process.env.GITHUB_APP_INSTALLATIONID
            },
        }); 


        const assignee = 
            await octokit.issues.addAssignees({
            owner,
            repo,
            issue_number,
            assignees: [user_id]
        });
        console.log(assignee);

        return assignee
        
    }

    catch(err) {
        console.log(err)
        return false
    }
}


exports.createIssueOnLeapcode = async (title, labels) => {
    try {
        const octokit = new Octokit({
            authStrategy: createAppAuth,
            auth: {
                id: process.env.GITHUB_APP_ID,
                privateKey: process.env.GITHUB_APP_PRIVATE_KEY.replace(/\\n/g, '\n'),
                installationId: process.env.GITHUB_APP_INSTALLATIONID
            },
        }); 


   


        if(config.env == 'production') {
            const data = await octokit.issues.create({
                owner: 'Leapcode-Open',
                repo: 'landingpage',
                title,
                labels
            });

            return data
        }
     

        else {
            return ({})
        }
       
       
        
    }
    catch(err) {
        console.log(err);
        return null
    }
}



exports.getRepoDetails = async (owner, repo) => {
    const octokit = new Octokit({
        auth:  process.env.GITHUB_USER_API_TOKEN
    });

    const data = await octokit.repos.get({
        owner,
        repo
    });

    const lang = await octokit.repos.listLanguages({
        owner,
        repo,
      });
      
    data.data.languages = lang.data;

    return data.data
}


exports.addCommentToRepo = async (owner, repo, issue_number, body) => {
    try {
        const octokit = new Octokit({
            authStrategy: createAppAuth,
            auth: {
                id: process.env.GITHUB_APP_ID,
                privateKey: process.env.GITHUB_APP_PRIVATE_KEY.replace(/\\n/g, '\n'),
                installationId: process.env.GITHUB_APP_INSTALLATIONID
            },
        }); 


        const addComment = await octokit.issues.createComment({
            owner,
            repo,
            issue_number,
            body
        });
        console.log('comment', addComment);

        
        return addComment;


    }

    catch(err) {
        console.log(err);
        return false;
    }

}



exports.forkRepoToUser = async (req, res, next) => {
    try {
        const { owner, repo } = req.params;
        const { ghtoken } = req.body;
        const octokit = new Octokit({
            auth: ghtoken
        });


        const forkRepo = await octokit.repos.createFork({
            owner,
            repo,
        });

        //const forkRepo = await octokit.repos.listForAuthenticatedUser();

        if(forkRepo)
            res.send(forkRepo.data)

        else 
            res.status(500).send();
    }

    catch(err) {
        next(err)
    }
}

exports.getARepo = async (req, res, next) => {
    try {
        const octokit = new Octokit({
            authStrategy: createAppAuth,
            auth: {
                id: process.env.GITHUB_APP_ID,
                privateKey: process.env.GITHUB_APP_PRIVATE_KEY.replace(/\\n/g, '\n'),
                installationId: process.env.GITHUB_APP_INSTALLATIONID
            },
        }); 
        const { owner, repo } = req.params;
        const { authUser } = req;


        const repoDe = await octokit.repos.get({
            owner: authUser.githubUsername,
            repo,
        });

        
        res.send(repoDe.data);
    }

    catch(err) {
        next(err)
    }
}