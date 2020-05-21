import React, { Component } from "react";
import {
  Table,
  Dropdown,
  DropdownButton,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import "../css/Skills.scss";

class Skills extends Component {
  processListItem(ski) {
    if (typeof ski === "string")
      return (
        <ListGroupItem key={ski} variant="secondary">
          {ski}
        </ListGroupItem>
      );

    let buffer = [];
    for (let keyer in ski) {
      let temp = ski[keyer].map((arr) => (
        <React.Fragment key={arr}>
          <Dropdown.Item disabled>{arr}</Dropdown.Item>
          <Dropdown.Divider />
        </React.Fragment>
      ));
      buffer.push(
        <ListGroupItem key={ski} variant="secondary">
          <DropdownButton
            size="sm"
            variant="outline-dark"
            drop="right"
            title={keyer}
          >
            {temp}
          </DropdownButton>
        </ListGroupItem>
      );
    }

    return buffer;
  }
  render() {
    const skills = this.props.data;

    return (
      <React.Fragment>
        <Table striped bordered hover className="skills-card mx-auto">
          <thead>
            <tr>
              <th>Type</th>
              <th>Skill set</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill, index) => (
              <tr key={index}>
                <td>
                  <b>{skill.type}</b>
                </td>
                <td>
                  <ListGroup
                    horizontal="lg"
                    variant="secondary"
                    className="list-group"
                  >
                    {skill.skillset.map((ski) => this.processListItem(ski))}
                  </ListGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

export default Skills;
