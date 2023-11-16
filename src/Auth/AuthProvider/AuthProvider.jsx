import PropTypes from "prop-types";

import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const Context = createContext(null);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

//   create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
//   sign in user with email and password
const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// Set the context value to acces it from anywhere
  const contextValue = {
    createUser,
    signIn,
    user,
    loading,
    
  };
//   Get the Children from Authprovider perameter from main.jsx for access it from anywhere
  return (
  <Context.Provider value={contextValue}>
    {children}
  </Context.Provider>);
};

export default Authprovider;

Authprovider.propTypes = {
  children: PropTypes.node,
};
