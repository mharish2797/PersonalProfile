import React, { Component } from "react";
import NavigBar from "./NavigBar";
import data from "../Data/personalData.json";
import Home from "./Home/Home";
import Education from "./Education/Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Awards from "./Awards";
import Certification from "./Certification";
import Activities from "./Activities";
import ContactMe from "./ContactMe";
class Data extends Component {
  constructor(props) {
    super(props);

    this.sectionMap = {
      home: <Home data={data["home"]}></Home>,
      education: <Education data={data["education"]}></Education>,
      skills: <Skills data={data["skills"]}></Skills>,
      experience: <Experience data={data["experience"]}></Experience>,
      projects: <Projects data={data["projects"]}></Projects>,
      awards: <Awards data={data["awards"]}></Awards>,
      activities: <Activities data={data["activities"]}></Activities>,
      certification: (
        <Certification data={data["certification"]}></Certification>
      ),
      contact: <ContactMe></ContactMe>,
    };
    this.state = {
      currentPage: this.sectionMap.education,
    };
  }

  navClick = (section) => {
    console.log(section);
    this.setState({
      currentPage: this.sectionMap[section],
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavigBar data={data} click={this.navClick}></NavigBar>
        {this.state.currentPage}
      </React.Fragment>
    );
  }
}

export default Data;
