import React, { Component } from "react";
import HomeCard from "./HomeCard";

//https://favicongrabber.com/service-api-reference
//Remember for extracting images
class Home extends Component {
  render() {

    const { data } = this.props;
    return (
      <React.Fragment>
        <HomeCard home={data}></HomeCard>
      </React.Fragment>
    );
  }
}

export default Home;
