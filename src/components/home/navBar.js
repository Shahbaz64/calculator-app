import React from "react";
import "components/home/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul className="topnav">
        <li>
          <Link id="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link id="link" to="/calculator">
            Calculator
          </Link>
        </li>
        <li>
          <Link id="link" to="/recents">
            Recents
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
