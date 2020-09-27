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
        <a href={"/auth/google"} className="google-btn">
          <img src="./img/btn_google_dark_normal_ios.svg" alt="google btn" />
          <p>Sign in with Google</p>
        </a>
      ) : (
        <React.Fragment>
          <h3>Welcom, {authState.user.firstName}</h3>
          <Link to="/profile" className="google-btn">
            <p>View Your Profile</p>
          </Link>
          <Logout />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default LandingPage;
