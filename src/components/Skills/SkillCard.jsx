import React, { Component } from "react";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";

class SkillCard extends Component {
  render() {
    const { skills, skill, index } = this.props;
    return (
      <Card text="dark" border="dark" key={index} className="skills-card">
        <Card.Header className="bg-dark text-white">{skill}</Card.Header>
        <Card.Body>
          <Card.Text className="text-left">
            <ListGroup variant="flush">
              {Object.keys(skills[skill]).map((sk, ind) => (
                <ListGroupItem key={ind}>
                  {" "}
                  <b>{sk}</b>
                  <br /> {skills[skill][sk].join(", ")}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SkillCard;
