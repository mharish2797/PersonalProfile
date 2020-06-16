import React, { Component } from "react";
import NavigBar from "./NavigBar";
import data from "../Data/personalData.json";
import Home from "./Home/Home";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import ContactMe from "./Contact/ContactMe";
import Honors from "./Honors/Honors";
class Root extends Component {
  constructor(props) {
    super(props);

    this.sectionMap = {
      home: <Home data={data["home"]}></Home>,
      education: <Education data={data["education"]}></Education>,
      skills: <Skills data={data["skills"]}></Skills>,
      experience: <Experience data={data["experience"]}></Experience>,
      projects: <Projects data={data["projects"]}></Projects>,
      contact: <ContactMe data={data["home"]}></ContactMe>,
    };
    this.state = {
      currentPage: this.sectionMap.home,
    };
  }

  navClick = (section) => {
    console.log(section);
    if (Object.keys(data["honors"]).includes(section)) {
      this.setState({
        currentPage: (
          <Honors data={data["honors"]} currSection={section}></Honors>
        ),
      });
    } else {
      this.setState({
        currentPage: this.sectionMap[section],
      });
    }
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

export default Root;
