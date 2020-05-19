import React, { Component } from "react";
import NavigBar from "./NavigBar";
import data from "../Data/personalData.json";
import Home from "./Home/Home";
import Education from "./Education/Education";
import Skills from "./Skills";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Awards from "./Honors/Awards";
import Certification from "./Honors/Certification";
import Activities from "./Honors/Activities";
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
      awards: <Awards data={data["honors"]["awards"]}></Awards>,
      activities: <Activities data={data["honors"]["activities"]}></Activities>,
      certification: (
        <Certification data={data["honors"]["certification"]}></Certification>
      ),
      contact: <ContactMe></ContactMe>,
    };
    this.state = {
      currentPage: this.sectionMap.skills,
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
