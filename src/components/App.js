import React from "react";
import Calculator from "components/calculator/calculator";
import Home from "components/home/home";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Recents from "components/recents/recents";

const MyApp = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/calculator" element={<Calculator />}></Route>
        <Route exact path="/recents" element={<Recents />}></Route>
      </Routes>
    </Router>
  );
};

export default MyApp;
