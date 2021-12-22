import React from "react";
import NavBar from "components/home/navBar";
import "components/home/home.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div>
        <h2>Calculator App</h2>
        <div className="card">
          <p className="about-calculator">
            This is Simple React-Made Calculator App Which is developed using
            react Functional Components. Here, We use Redux for global state
            Mangement. In this Assignment, we used react routers for routers
            management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
