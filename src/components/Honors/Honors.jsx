import React, { Component } from "react";
import ScrollableAnchor, { goToAnchor } from "react-scrollable-anchor";
import Certification from "./Certification";
import Awards from "./Awards";
import AwardSmall from "./AwardSmall";
import MediaQuery from "react-responsive";

import Activities from "./Activities";
import { Card } from "react-bootstrap";

class Honors extends Component {
  render() {
    const { data, currSection } = this.props;
    goToAnchor(currSection, true);

    return (
      <React.Fragment>
        <ScrollableAnchor id={"awards"}>
          <Card border="dark" className="mx-auto honor-card">
            <Card.Header className="header-color">
              <b>Awards </b>
            </Card.Header>
            <Card.Body>
              <MediaQuery minWidth={992}>
                <Awards data={data["awards"]}></Awards>
              </MediaQuery>
              <MediaQuery maxWidth={992}>
                <AwardSmall data={data["awards"]}></AwardSmall>
              </MediaQuery>
            </Card.Body>
          </Card>
        </ScrollableAnchor>
        <ScrollableAnchor id={"certification"}>
          <Card border="dark" className="mx-auto honor-card">
            <Card.Header className="header-color">
              <b> Certification </b>
            </Card.Header>
            <Card.Body>
              <Certification data={data["certification"]} />
            </Card.Body>
          </Card>
        </ScrollableAnchor>

        <ScrollableAnchor id={"activities"}>
          <Card border="dark" className="mx-auto honor-card">
            <Card.Header className="header-color">
              <b>Activities</b>
            </Card.Header>
            <Card.Body>
              <Activities data={data["activities"]}></Activities>
            </Card.Body>
          </Card>
        </ScrollableAnchor>
      </React.Fragment>
    );
  }
}

export default Honors;
