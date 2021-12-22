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
          <ul>
            <li>
              <p className="about-calculator">
                This is a Simple Calculator App, it provides you the facility to
                perform calculations easily and view recent History
              </p>
            </li>
            <li>
              <p className="about-calculator">
                This is Simple React-Made Calculator App Which is developed by
                using react Functional Components. Here, We use Redux for global
                State Mangement. In this Assignment, we used react routes for
                routers management.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
