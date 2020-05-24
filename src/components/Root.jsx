import React, { Component } from "react";
import NavigBar from "./NavigBar";
import data from "../Data/personalData.json";
import Home from "./Home/Home";
import Education from "./Education/Education";
import Skills from "./Skills";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
// import Awards from "./Honors/Awards";
// import Certification from "./Honors/Certification";
// import Activities from "./Honors/Activities";
import ContactMe from "./Contact/ContactMe";
import Honors from "./Honors/Honors";
class Data extends Component {
  constructor(props) {
    super(props);

    this.sectionMap = {
      home: <Home data={data["home"]}></Home>,
      education: <Education data={data["education"]}></Education>,
      skills: <Skills data={data["skills"]}></Skills>,
      experience: <Experience data={data["experience"]}></Experience>,
      projects: <Projects data={data["projects"]}></Projects>,
      // awards: <Awards data={data["honors"]["awards"]}></Awards>,
      // activities: <Activities data={data["honors"]["activities"]}></Activities>,
      // certification: (
      //   <Certification data={data["honors"]["certification"]}></Certification>
      // ),
      contact: <ContactMe data={data["home"]}></ContactMe>,
    };
    this.state = {
      // currentPage: this.sectionMap.contact,
      currentPage: (
        <Honors data={data["honors"]} currSection={"awards"}></Honors>
      ),
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
        {/* <div className="w-100 p-3 h-100 d-inline-block bg-dark">
          {this.state.currentPage}
        </div> */}
        {this.state.currentPage}
      </React.Fragment>
    );
  }
}

export default Data;
