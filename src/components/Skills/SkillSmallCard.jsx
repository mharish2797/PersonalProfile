import React, { Component } from "react";
import {
  Card,
  ListGroupItem,
  ListGroup,
  Accordion,
  Button,
} from "react-bootstrap";

class SkillSmallCard extends Component {
  render() {
    const { skills, skill, index } = this.props;
    return (
      <Accordion>
        <Card text="dark" border="dark" key={index} className="skills-card">
          <Card.Header className="bg-dark text-left text-white">
            {skill}
            <Accordion.Toggle as={Button} variant="link" eventKey={index}>
              info
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={index}>
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
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default SkillSmallCard;
