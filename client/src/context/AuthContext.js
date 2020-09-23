import React, { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [authState, authDispatch] = useReducer(
    authReducer,
    {
      isAuthenticated: false,
      user: {},
    },
    async () => {
      const req = await axios({
        method: "GET",
        url: "/api",
      });

      const res = req.data;
      if (res.isAuthenticated === undefined) {
        return {
          isAuthenticated: false,
          user: {},
        };
      } else {
        authDispatch({ type: "SET_CURRENT_USER", data: res });
      }
    }
  );

  const getData = async () => {
    const req = await axios({
      method: "GET",
      url: "/api",
    });

    const res = req.data;
    authDispatch({ type: "GET_USER", data: res });
  };

  return (
    <AuthContext.Provider value={{ authState, authDispatch, getData }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
