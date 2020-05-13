import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import displayPic from "../../Data/Images/displayPic.jpg";
import "../../css/Card.scss";
import resume from "../../Data/Resume.pdf";
class HomeCard extends Component {
  render() {
    const { about } = this.props.home;
    return (
      <React.Fragment>
        <Card>
          <Card.Img className="card-img" variant="left" src={displayPic} />
          <Card.Body>
            <Card.Title>About Me</Card.Title>
            <Card.Text>{about.summary}</Card.Text>
            <a href={resume} target="_blank" rel="noopener noreferrer" download>
              <Button variant="dark">
                <i className="fas fa-download" />
                Resume
              </Button>
            </a>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default HomeCard;
