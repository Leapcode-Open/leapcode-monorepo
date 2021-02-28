import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASEURL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID
}

let firebaseApp = null;
if (!firebase.apps.length) {
    firebaseApp = firebase.initializeApp(firebaseConfig);
}



export const auth = firebase.auth;

export const provider = new firebase.auth.GithubAuthProvider();

export const storage = firebase.storage();

export const signInWithGithub = () => {
    auth().signInWithPopup(provider);
};

export default firebase;