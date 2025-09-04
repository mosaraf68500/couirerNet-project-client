import React, { useEffect, useState } from "react";
import { AuthCotex } from "../AuthContex/AuthContex";
import { auth } from "../../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut=()=>{
    setLoading(true)
    return signOut(auth)
  }

  const signInGoogle =()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (CurrentUser) => {
      setUser(CurrentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const AuthInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    signInGoogle
  };
  return <AuthCotex value={AuthInfo}>{children}</AuthCotex>;
};

export default AuthProvider;
