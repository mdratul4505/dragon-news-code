import React, { createContext, useEffect, useState } from "react";
export const AuthContest = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

const auth = getAuth(app);

const AuthProvaider = ({ children }) => {
    const creatUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth , email, password)
    }

    const logOut = () =>{
      return signOut(auth)
      .then(()=>{

      })
      .catch(error =>{
        console.log(error)
      })
    }

  const [user, setUser] = useState(null);
  console.log(user)



  useEffect(()=>{
   const unSuscribe =  onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
    })
    return()=>{
      unSuscribe ()
    }
  },[])

  const authData = {
    user,
    setUser,
    creatUser,
    logOut,
  };

  return <AuthContest value={authData}>{children}</AuthContest>;
};

export default AuthProvaider;
