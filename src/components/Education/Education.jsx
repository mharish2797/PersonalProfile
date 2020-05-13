import React, { Component } from "react";
import EducationCard from "./EducationCard";

class Education extends Component {
  render() {
    const { data } = this.props;
    const eduList = data.map((datum) => (
      <EducationCard key={datum.university} edu={datum}></EducationCard>
    ));
    return <React.Fragment>{eduList}</React.Fragment>;
  }
}

export default Education;
