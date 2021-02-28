const User = require('../models/user.model')
const { auth } =  require('../config/firebase');



const getAuthToken = (req, res, next) => {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      req.authToken = req.headers.authorization.split(' ')[1];
    } else {
      req.authToken = null;
    }
    next();
  };


exports.auth = (req, res, next) => {
    getAuthToken(req, res, async () => {
       try {
         const { authToken } = req;
         const userInfo = await auth()
           .verifyIdToken(authToken);
         
         req.authId = userInfo.uid;
         let authUser = await User.findOne({ uid: userInfo.uid }).lean();
         authUser.authDetails =  userInfo;
         if(!authUser) {
           return res.status(401).send({ error: 'You are not part of open. You are not authorized to make this request'  })
         }
         req.authUser = authUser;
         return next();
       } catch (e) {
         return res
           .status(401)
           .send({ error: 'You are not authorized to make this request' });
       }
     });
};



exports.adminAuth = (req, res, next) => {
  getAuthToken(req, res, async () => {
     try {
       const { authToken } = req;
       const userInfo = await auth()
         .verifyIdToken(authToken);
       
       req.authId = userInfo.uid;
       let authUser = await User.findOne({ uid: userInfo.uid }).lean();
       console.log('rr', authUser)
       if (authUser.role != 'admin') {
            throw new Error('unauthorized')
        }
       authUser.authDetails =  userInfo;

       if(!authUser) {
         return res.status(401).send({ error: 'You are not part of open. You are not authorized to make this request'  })
       }
       req.authUser = authUser;
       return next();
     } catch (e) {
       return res
         .status(401)
         .send({ error: 'You are not authorized to make this request' });
     }
   });
};


exports.adminAuthOld = (req, res, next) => {
    getAuthToken(req, res, async () => {
       try {
         const { authToken } = req;
         const userInfo = await auth()
           .verifyIdToken(authToken);


        const authUser = await User.findOne({ uid: userInfo.uid });
   
         if (authUser.role === 'admin') {
           req.authId = userInfo.uid;
           return next();
         }
   
         throw new Error('unauthorized')
       } catch (e) {
         return res
           .status(401)
           .send({ error: 'You are not authorized to make this request' });
       }
     });
   };
