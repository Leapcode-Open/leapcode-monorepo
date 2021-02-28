
import React, { useEffect, useState } from "react";
import { auth, provider } from '../config/firebase';
//import SkeletonLoading from "../Components/SkeletonLoading";
import cookie from 'js-cookie';
import { API_HEADERS, API_URL, COOKIE_TOKEN, getToken } from "../config/constants";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const [token, setToken] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [claims, setClaims] = useState(null);
  const [lpLoggedIn, setLpLoggedIn] = useState(false);

  const signOut = () => {
    auth().signOut().then(res => {
      setToken(null);
      setUserDetails(null);
      cookie.remove(COOKIE_TOKEN);
      window.location.href="/"
    })
  }


  const login = async () => {
    const authUser = await auth().signInWithPopup(provider);
    const userToken = await auth().currentUser.getIdToken();
    const loginInfo = await fetch(API_URL+`/auth/login`, {
        method: 'POST',
        headers: API_HEADERS,
        body: JSON.stringify({
            token: userToken,
            username: authUser.additionalUserInfo ? authUser.additionalUserInfo.username : '',
            githubInfo: authUser.additionalUserInfo ? authUser.additionalUserInfo.profile : {}
        })
    });

    if(!loginInfo) {
      return signOut();
    }

    window.location.reload()
  }

  useEffect(() => {
    auth().onAuthStateChanged( async (user) => {
      setCurrentUser(user)
      if(user) {

        const idClains = await user.getIdTokenResult();
        setClaims(idClains);
        const idToken = await user.getIdToken();
        cookie.set(COOKIE_TOKEN, idToken);
        setToken(idToken);
        const userD = {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
          uid: user.uid,
          metadata: user.metadata
        }
        setUserDetails(userD)
      }
      
      else {
        setCurrentUser(null)
        setPending(false);
        //setToken(null)
        cookie.remove(COOKIE_TOKEN);
      }

      setPending(false);
      
    });
  }, []);




  // if( pending ){
  //   return (<div className="w-screen h-screen flex items-center justify-center">
  //     <div className="w-1/4 bg-white rounded-lg px-6 py-10 flex items-center flex-col">
  //       loading
  //     </div>
  //   </div>)
  // }


  return (
    <AuthContext.Provider
      value={{
        currentUser,
        authLoading: false,
        setToken,
        token,
        userDetails,
        signOut,
        claims,
        login
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};