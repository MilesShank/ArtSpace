import React from "react";
import { Link } from "react-router-dom";
import logo from "../localAssets/logo.svg";
import "../header.css";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} class="logo" alt="Artspace Logo" />
      <Link to="/">
        <h1>
          <p class="title">ARTSPACE</p>
          <p class="author">Miles Shank</p>
        </h1>
      </Link>{" "}
      <span>
        <p>T</p> <p>G</p> <p>I</p> <p>L</p>
      </span>
      <nav>
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
      </nav>
    </div>
  );
};

export default Header;
