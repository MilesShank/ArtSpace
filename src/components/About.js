import React from "react";
import { useState } from "react";
import { Button, Tab, Tabs } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import AboutPersonal from "./AboutTextPersonal";
import AboutProfessional from "./AboutTextProfessional";

function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutTypeContainer">
        <container className="aboutTextContainer">
          <Tabs animate={true} key={"vertical"} vertical={false}>
            <Tab id="PersonalTab" title="Personal" panel={<AboutPersonal />} />
            <Tab
              id="ProfessionalTab"
              title="Professional"
              panel={<AboutProfessional />}
            />
            <Tab
              id="SkillsTab"
              title="Skill Stack"
              panel={<p>I write code and draw good</p>}
            />
          </Tabs>
        </container>
      </div>
    </div>
  );
}
export default About;
