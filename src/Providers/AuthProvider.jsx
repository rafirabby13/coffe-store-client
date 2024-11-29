/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import auth from '../Firebase/firebase.init.js'
export const AuthContext = createContext(null);






const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

const registerUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

const loginUser = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}


  const authInfo = {
    user,
    loading,
    registerUser,
    loginUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
