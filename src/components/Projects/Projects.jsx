import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
class Projects extends Component {
  render() {
    const { data } = this.props;

    return (
      <React.Fragment>
        {data.map((proj, index) => (
          <ProjectCard key={index} proj={proj}></ProjectCard>
        ))}
      </React.Fragment>
    );
  }
}

export default Projects;
