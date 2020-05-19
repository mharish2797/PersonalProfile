import React, { Component } from "react";
import ExperienceCard from "./ExperienceCard";

class Experience extends Component {
  render() {
    const { data } = this.props;

    return (
      <React.Fragment>
        {data.map((exp, index) => (
          <ExperienceCard key={index} exp={exp}></ExperienceCard>
        ))}
      </React.Fragment>
    );
  }
}

export default Experience;
