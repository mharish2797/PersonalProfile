import React, { Component } from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Badge,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "../../css/ProjectCard.scss";
import * as Icon from "react-bootstrap-icons";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      variants: [
        "primary",
        "success",
        "info",
        "light",
        "dark",
        "danger",
        "warning",
        "secondary",
      ],
    };
  }

  render() {
    const { proj } = this.props;
    const { variants } = this.state;
    return (
      <React.Fragment>
        <Card border="dark" className="proj-card mx-auto">
          <Card.Body>
            <Card.Title>
              {proj.title}{" "}
              {proj.url && (
                <a
                  rel="noopener noreferrer"
                  style={{ fontSize: "70%" }}
                  href={proj.url}
                  target="_blank"
                >
                  [source]
                </a>
              )}{" "}
              {proj.liveUrl && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "70%", color: "red" }}
                  href={proj.liveUrl}
                >
                  [live]
                </a>
              )}
            </Card.Title>
            <Card.Text>
              <Container fluid borderless>
                <Row>
                  <Col sm={6}>
                    {proj.start} - {proj.end}
                  </Col>
                  <Col sm={6} className="text-right">
                    <React.Fragment>
                      {proj.technology.map((tech, index) => (
                        <React.Fragment  key={tech}>
                          <Badge
                            pills
                           
                            variant={
                              variants[
                                Math.floor(Math.random() * variants.length) %
                                  variants.length
                              ]
                            }
                          >
                            {tech}
                          </Badge>
                          &emsp;
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  </Col>
                </Row>
              </Container>
              <br />
              <ListGroup style={{ width: "100%" }}>
                <ListGroupItem>
                  {proj.details.map((course) => (
                    <React.Fragment key={course}>
                      <Icon.BoxArrowRight color="royalblue" size={30} />
                      &nbsp;{course}
                      <br />
                    </React.Fragment>
                  ))}
                </ListGroupItem>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default ProjectCard;
