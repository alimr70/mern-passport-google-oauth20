import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import "./index.css";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <AuthContextProvider>
      <Router>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
        </div>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
