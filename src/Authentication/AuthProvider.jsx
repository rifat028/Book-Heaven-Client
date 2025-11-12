import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../assets/firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const CreateUserWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { loading, CreateUserWithEmail };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
