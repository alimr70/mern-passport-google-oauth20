import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LandingPage = () => {
  const { authState, getData } = useContext(AuthContext);
  console.log(authState);

  return (
    <React.Fragment>
      <h1>Landing Page</h1>
      {!authState.isAuthenticated ? (
        <button onClick={() => getData()}>Login with google</button>
      ) : (
        <h3>Welcom {authState.user.displayName}</h3>
      )}
    </React.Fragment>
  );
};

export default LandingPage;
