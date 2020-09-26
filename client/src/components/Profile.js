import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router-dom";
import Logout from "./Logout";

const Profile = () => {
  const { authState } = useContext(AuthContext);

  return (
    <React.Fragment>
      <h1>Profile</h1>
      {!authState.isAuthenticated ? (
        <Redirect to="/" />
      ) : (
        <React.Fragment>
          <img src={authState.user.image} alt="Profile" />
          <h3>Welcom {authState.user.displayName}</h3>
          <h3>Your E-Mail: {authState.user.email}</h3>
          <Logout />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Profile;
