import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import Certification from "./Certification";
import Awards from "./Awards";
import Activities from "./Activities";

class Honors extends Component {
  render() {
    return (
      <React.Fragment>
        <ScrollableAnchor id={"awards"}>
          <Awards></Awards>
        </ScrollableAnchor>
        <ScrollableAnchor id={"certification"}>
          <Certification />
        </ScrollableAnchor>
        <ScrollableAnchor id={"activities"}>
          <Activities></Activities>
        </ScrollableAnchor>
      </React.Fragment>
    );
  }
}

export default Honors;
