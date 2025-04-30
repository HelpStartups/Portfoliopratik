import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegLightbulb } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <NavLink to="/" exact="true" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/project" activeclassname="active">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="navbar-cta">
        <a
          href="https://yourbloglink.com" // Replace with your actual blog link
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button-minimal"
        >
          <FaRegLightbulb className="cta-icon" />
          Think Unthinkable →
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
