import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About.js";
const Header = () => {
  return (
    <div className="header">
      <nav class="bp4-navbar bp4-dark">
        <div class="bp4-navbar-group bp4-align-left">
          <div class="bp4-navbar-heading">ArtSpace</div>
        </div>
        <div class="bp4-navbar-group bp4-align-center">
          <button class="bp4-button bp4-minimal">Home</button>
          <button class="bp4-button bp4-minimal">Projects</button>
          <button class="bp4-button bp4-minimal">About</button>
          <button class="bp4-button bp4-minimal">Shop</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
