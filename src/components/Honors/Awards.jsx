import React, { Component } from "react";
import { ListGroup, Tab, Row, Col, Card } from "react-bootstrap";
import "../../css/Awards.scss";
class Awards extends Component {
  render() {
    const { data } = this.props;

    return (
      <React.Fragment>
        <Tab.Container defaultActiveKey="#award0">
          <Row>
            <Col sm={4}>
              <ListGroup>
                {data.map((award, index) => (
                  <ListGroup.Item action href={`#award${index}`}>
                    {award.title}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content className="h-100">
                {data.map((award, index) => (
                  <Tab.Pane eventKey={`#award${index}`} className="h-100">
                    <Card className="my-auto">
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
