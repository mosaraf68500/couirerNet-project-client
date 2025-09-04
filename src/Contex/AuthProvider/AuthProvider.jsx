import React from "react";
import { AuthCotex } from "../AuthContex/AuthContex";

const AuthProvider = ({ children }) => {
  const AuthInfo = {};
  return <AuthCotex value={AuthInfo}>
    {children}
    </AuthCotex>;
};

export default AuthProvider;
