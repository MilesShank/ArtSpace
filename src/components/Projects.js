import React from "react";
import { Tab, Tabs } from "@blueprintjs/core";
import "../projects.css";

function Projects(projectTypes, projectData) {
  console.log(projectTypes, projectData);
  function displayTab(type) {
    return (
      <Tab
        id={type + "tab"}
        title={type}
        panel={<div>{type} placeholder</div>}
      />
    );
  }
  return (
    <div className="projectContainer">
      <Tabs animate={true} key={"vertical"} vertical={false}>
        {projectTypes.forEach((type) => {
          displayTab(type);
        })}
        {/* 
        <Tab id="PersonalTab" title="Personal" panel={<div> hhh </div>} />
        <Tab
          id="ProfessionalTab"
          title="Professional"
          panel={<div> ffff </div>}
        />
        <Tab id="SkillsTab" title="Skill Stack" panel={<div> ggg </div>} /> */}
      </Tabs>
    </div>
  );
}
export default Projects;
