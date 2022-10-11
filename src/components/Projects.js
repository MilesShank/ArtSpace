import React from "react";
import { Tab, Tabs } from "@blueprintjs/core";
import "../projects.css";

function Projects() {
  return (
    <div className="projectContainer">
      <Tabs animate={true} key={"vertical"} vertical={false}>
        <Tab id="PersonalTab" title="Personal" panel={<div> hhh </div>} />
        <Tab
          id="ProfessionalTab"
          title="Professional"
          panel={<div> ffff </div>}
        />
        <Tab id="SkillsTab" title="Skill Stack" panel={<div> ggg </div>} />
      </Tabs>
    </div>
  );
}
export default Projects;
