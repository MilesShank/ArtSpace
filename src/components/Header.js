import React from "react";
import { Link } from "react-router-dom";
import logo from "../localAssets/logo.svg";
import "../header.css";
import gitlogo from "../localAssets/GitHub-Mark-Light-64px.png";
import lnlogo from "../localAssets/LI-In-Bug.png";
import twitlogo from "../localAssets/twitter-icon-circle-light-logo.png";
import instalogo from "../localAssets/Instagram_Glyph_White.png";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} class="logo" alt="Artspace Logo" />
      <Link to="/">
        <h1>
          <p class="title">ARTSPACE</p>
          <p class="author">
            <p class="minitext">created by</p> Miles Shank
          </p>
        </h1>
      </Link>{" "}
      <span class="sm_icon_container">
        <a
          href="https://github.com/MilesShank"
          target="_blank"
          rel="noreferrer"
        >
          <img class="sm_icon" src={gitlogo} alt="Github Logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/miles-shank/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img class="sm_icon" src={lnlogo} alt="Linkedin Logo" />{" "}
        </a>

        <a
          href="https://www.instagram.com/doubleclickprince"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img class="sm_icon" src={instalogo} alt="Instagram Logo" />
        </a>
        {/* At the Moment we're not linking twitter */}
        {/* <a
          href="https://github.com/MilesShank"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img class="sm_icon" src={twitlogo} alt="Twitter Logo" />{" "}
        </a> */}
      </span>
      <nav>
        <span class="navlinks">
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
        </span>
      </nav>
    </div>
  );
};

export default Header;
