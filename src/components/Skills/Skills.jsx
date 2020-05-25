import React, { Component } from "react";
import { CardColumns, Card } from "react-bootstrap";
import "../../css/Skills.scss";
import MediaQuery from "react-responsive";
import SkillCard from "./SkillCard";
import SkillSmallCard from "./SkillSmallCard";

class Skills extends Component {
  render() {
    const skills = this.props.data;
    const skillsKeys = Object.keys(skills);
    return (
      <React.Fragment>
        <Card bg="dark" text="white" className="skills-card">
          <CardColumns>
            <MediaQuery minWidth={992}>
              {skillsKeys.map((skill, index) => (
                <SkillCard
                  skills={skills}
                  skill={skill}
                  index={index}
                ></SkillCard>
              ))}
            </MediaQuery>
            <MediaQuery maxWidth={992}>
              {skillsKeys.map((skill, index) => (
                <SkillSmallCard
                  skills={skills}
                  skill={skill}
                  index={index}
                ></SkillSmallCard>
              ))}
            </MediaQuery>
          </CardColumns>
        </Card>
      </React.Fragment>
    );
  }
}

export default Skills;
