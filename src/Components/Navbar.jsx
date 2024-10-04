import React from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  console.log("splitLocation ", splitLocation);
  return (
    <nav>
      <div className="nav-menu">
        <h1>
          {splitLocation[1] === ""
            ? "DASHBOARD"
            : splitLocation[1].toUpperCase()}
        </h1>
        <ul>
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/">What Is Carbon Market?</Link>
          </li>
          <li>
            <span className="material-symbols-outlined">person_apron</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
