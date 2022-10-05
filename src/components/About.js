import React from "react";
import { Tab, Tabs } from "@blueprintjs/core";
import "../about.css";
import AboutPersonal from "./AboutTextPersonal";
import AboutProfessional from "./AboutTextProfessional";
import AboutSkillStack from "./AboutTextSkillStack";

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
              panel={<AboutSkillStack />}
            />
          </Tabs>
        </container>
      </div>
    </div>
  );
}
export default About;
