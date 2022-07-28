import React from "react";
import { Link } from "react-router-dom";
import "../header.css";
const Header = () => {
  return (
    <div className="header">
      <nav class="bp4-navbar bp4-dark">
        <div class="bp4-navbar-group bp4-align-left">
          <div class="bp4-navbar-heading">
            <Link to="/">ArtSpace</Link>
          </div>
        </div>
        <div class="bp4-navbar-group bp4-align-center">
          <Link to="/">
            <button class="bp4-button bp4-minimal">Home</button>
          </Link>
          <Link to="/Projects">
            <button class="bp4-button bp4-minimal">Projects</button>
          </Link>
          <Link to="/About">
            <button class="bp4-button bp4-minimal">About</button>
          </Link>
          <Link to="/Shop">
            <button class="bp4-button bp4-minimal">Shop</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
