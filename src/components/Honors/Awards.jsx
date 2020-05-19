import React, { Component } from "react";
import { ListGroup, ListGroupItem, Accordion, Button } from "react-bootstrap";
class Awards extends Component {
  render() {
    const { data } = this.props;

    return (
      <React.Fragment>
        <ListGroup
          className="list-group"
          style={{ width: "30%", textAlign: "left" }}
        >
          {data.map((award, index) => (
            <Accordion>
              {" "}
              <ListGroupItem key={award}>
                {award.title}
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey={index}
                  style={{ fontSize: "70%" }}
                >
                  [info]
                </Accordion.Toggle>
              </ListGroupItem>
              <Accordion.Collapse eventKey={index}>
                <React.Fragment>{award.details[0]}</React.Fragment>
              </Accordion.Collapse>
            </Accordion>
          ))}
        </ListGroup>
      </React.Fragment>
    );
  }
}

export default Awards;
