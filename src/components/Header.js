import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { About } from "./About.js";
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
          <button class="bp4-button bp4-minimal">
            <Link to="/">Home</Link>
          </button>
          <button class="bp4-button bp4-minimal">
            <Link to="/Projects">Projects</Link>
          </button>
          <button class="bp4-button bp4-minimal">
            <Link to="/About">About</Link>
          </button>
          <button class="bp4-button bp4-minimal">
            <Link to="/Shop">Shop</Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
