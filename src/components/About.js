import React from "react";
import { useState } from "react";
import { Tab, Tabs } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import "../about.css";
import AboutPersonal from "./AboutTextPersonal";
import AboutProfessional from "./AboutTextProfessional";
import AboutSkillStack from "./AboutTextSkillStack";

function About() {
  return (
    <div className="aboutContainer">
      <div id="background-img" class="background-img"></div>
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
              panel={<AboutSkillStack />}
            />
          </Tabs>
        </container>
      </div>
    </div>
  );
}
export default About;
