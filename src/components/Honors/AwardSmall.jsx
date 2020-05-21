import React, { Component } from "react";
import { Card, Accordion, Button } from "react-bootstrap";
class AwardSmall extends Component {
  render() {
    const { data } = this.props;

    return (
      <React.Fragment>
        <Accordion>
          {data.map((award, index) => (
            <Card>
              <Card.Header>
                {award.title}
                <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                  [info]
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={index}>
                <Card.Body>
                  <b>Conferred by </b>
                  {award.by}
                  <br />
                  <b>Summary</b>
                  <br />
                  {award.details.map((det) => (
                    <React.Fragment>
                      {det} <br />
                    </React.Fragment>
                  ))}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </React.Fragment>
    );
  }
}

export default AwardSmall;
