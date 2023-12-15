import React, { createContext, useState, useEffect } from "react";
import app from "../firebase/firebase.config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  //signin vs google
  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser)
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubsribe();
    };
  }, []);

  // Đăng xuất
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfor = {
    user,
    createUser,
    loginWithGoogle,
    logout,
    login,
    loading
  };
  return (
    <AuthContext.Provider value={authInfor}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
