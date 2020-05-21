import React, { Component } from "react";
import { Card, Button, Container, Row, Col, Image } from "react-bootstrap";
import "../../css/HomeCard.scss";
import resume from "../../Data/Resume.pdf";
class HomeCard extends Component {
  render() {
    const { about } = this.props.home;
    return (
      <React.Fragment>
        <Card className="mx-auto home-card">
          <Container fluid borderless>
            <Row>
              <Col>
                <Image
                  fluid
                  className="card-img "
                  src={require("../../Data/Images/displayPic/displayPic3.jpg")}
                />
              </Col>
              <Col lg={6}>
                <Card.Body>
                  <Card.Title>About Me</Card.Title>
                  <Card.Text className="text-justify">
                    {about.summary.map((para) => (
                      <React.Fragment>
                        {para}
                        <br />
                        <br />
                      </React.Fragment>
                    ))}
                  </Card.Text>
                  <a
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <Button variant="dark">
                      <i className="fas fa-download" />
                      Resume
                    </Button>
                  </a>
                </Card.Body>
              </Col>
            </Row>
          </Container>
        </Card>
      </React.Fragment>
    );
  }
}

export default HomeCard;
