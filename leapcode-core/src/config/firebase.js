var admin = require("firebase-admin");


admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://leapcode-open.firebaseio.com'
});

module.exports = admin;
