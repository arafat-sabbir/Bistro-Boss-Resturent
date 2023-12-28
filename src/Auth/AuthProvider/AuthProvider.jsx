import PropTypes from "prop-types";

import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import useAxiosPublic from "../../assets/Hooks/useAxiosPublic/useAxiosPublic";

export const Context = createContext(null);
const Authprovider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const googleAuthProvider = new GoogleAuthProvider();
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  //   create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   sign in user with email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };
  // sign Out User
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserInfo = (name, photoUrl) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };
  // Set the context value to acces it from anywhere
  const contextValue = {
    createUser,
    signIn,
    user,
    loading,
    logOut,
    updateUserInfo,
    googleSignIn,
  };
  //   Get the Children from Authprovider perameter from main.jsx for access it from anywhere
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const user = { email: currentUser.email };
        axiosPublic.post("/user/accessToken", user).then((res) => {
          const token = res.data.token;
          if (token) {
            localStorage.setItem("access-token", token);
            setLoading(false);
          }
        });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [auth, axiosPublic]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Authprovider;

Authprovider.propTypes = {
  children: PropTypes.node,
};
