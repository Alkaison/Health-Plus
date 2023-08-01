import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <a href="/">
          Health <span className="navbar-sign">+</span>
        </a>
      </h1>
      <ul className="navbar-items">
        <li>
          <a href="/" className="navbar-links">
            Home
          </a>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Services
          </a>
        </li>
        <li>
          <a href="#doctors" className="navbar-links">
            Doctors
          </a>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            Reviews
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
        </li>
      </ul>
      <button className="navbar-btn" type="button"><FontAwesomeIcon icon={faCommentDots} /> Live Chat</button>
    </div>
  );
}

export default Navbar;
