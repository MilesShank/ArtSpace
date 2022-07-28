import React from "react";
import { useState } from "react";
import { Button } from "@blueprintjs/core";
import AboutPersonal from "./AboutTextPersonal";

function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutTypeContainer">
        <button>Personal</button>
        <button>For the Recruiters</button>
      </div>
      <container className="aboutTextContainer">
        <AboutPersonal />
      </container>
    </div>
  );
}
export default About;
