import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/signin/SignIn";
import SignUp from "./components/signup/SignUp";
import App from "./App";

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
