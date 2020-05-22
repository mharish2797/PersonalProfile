import React, { Component } from "react";
import { CardColumns, Card } from "react-bootstrap";
import "../css/Skills.scss";

class Skills extends Component {
  render() {
    const skills = this.props.data;

    return (
      <React.Fragment>
        <Card className="skills-card">
          <CardColumns>
            {skills.map((skill, index) => (
              <Card key={index} className="skills-card">
                <Card.Title>{skill["type"]}</Card.Title>
                <Card.Body>
                  <Card.Text>
                    {skill["skillset"].map((sk, ind) => (
                      // <ListGroupItem key={ind}>{sk}</ListGroupItem>
                      <React.Fragment>{sk}, </React.Fragment>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </CardColumns>
        </Card>
      </React.Fragment>
    );
  }
}

export default Skills;
