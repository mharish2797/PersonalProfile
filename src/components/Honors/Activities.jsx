import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "../../css/Honors.scss";

class Activities extends Component {
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        {data.map((activity) => (
          <Card border="dark" className="honor-card">
            <Card.Body>
              <Card.Title> {activity.title}</Card.Title>
              <Card.Text>{activity.details.map((detail) => detail)}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </React.Fragment>
    );
  }
}

export default Activities;
