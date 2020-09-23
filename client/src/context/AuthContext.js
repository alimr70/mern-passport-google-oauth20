import React, { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: {},
  });

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
