import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Logout = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div
      className="google-btn"
      onClick={() => {
        logout();
      }}>
      <p>Logout</p>
    </div>
  );
};

export default Logout;
