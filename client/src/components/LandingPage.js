import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Logout from "./Logout";

const api = process.env.REACT_APP_API_URL;

const LandingPage = () => {
  const { authState } = useContext(AuthContext);

  return (
    <React.Fragment>
      <h1>Landing Page</h1>
      {!authState.isAuthenticated ? (
        <a href={api + "/auth/google"}>
          <button>Login with google</button>
        </a>
      ) : (
        <React.Fragment>
          <h3>Welcom {authState.user.displayName}</h3>
          <Link to="/profile">
            <button>View Your Profile</button>
          </Link>
          <Logout />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default LandingPage;
