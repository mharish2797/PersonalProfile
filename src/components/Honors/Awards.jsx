import React, { Component } from "react";
import { ListGroup, Tab, Row, Col, Card } from "react-bootstrap";
class Awards extends Component {
  render() {
    const { data } = this.props;

    return (
      <React.Fragment>
        <Tab.Container defaultActiveKey="#award0">
          <Row>
            <Col sm={4}>
              <ListGroup variant="flush">
                {data.map((award, index) => (
                  <ListGroup.Item action variant="dark" href={`#award${index}`}>
                    {award.title}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                {data.map((award, index) => (
                  <Tab.Pane eventKey={`#award${index}`}>
                    <Card>
                      <Card.Title>
                        &emsp;<b>Conferred by </b>
                        {award.by}
                      </Card.Title>
                      <Card.Body>
                        <b>Summary</b>
                        <Card.Text>
                          {award.details.map((det) => (
                            <React.Fragment>
                              {det} <br />
                            </React.Fragment>
                          ))}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </React.Fragment>
    );
  }
}

export default Awards;
