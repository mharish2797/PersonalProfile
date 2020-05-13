import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "../../css/EducationCard.scss";
import axios from "axios";

class EducationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUri: "",
      imgSet: false,
    };
  }

  getMeta(url, resolve) {
    var img = new Image();
    img.src = url;
    img.onload = function () {
      const dimensions = {
        url: url,
        height: this.height,
        width: this.width,
        total: this.height * this.width,
      };
      resolve(dimensions);
    };
  }
  chooseImg = async (iconList) => {
    const dimList = await Promise.all(
      iconList.map(
        (icon) =>
          new Promise((resolve) => {
            this.getMeta(icon.src, resolve);
          })
      )
    );
    let maxObj = dimList.sort(function (a, b) {
      return b.total - a.total;
    });

    if (maxObj[0].total > 2400) return maxObj[0].url;
    else return this.state.imgUri;
  };

  getImg = async (site) => {
    let domain = site.replace("https://", "");
    domain = domain.substr(0, domain.indexOf("/"));
    let url = `http://favicongrabber.com/api/grab/${domain}?pretty=true`;

    try {
      const res = await axios.get(url);
      const imgUri = await this.chooseImg(res.data.icons);
      this.setState({
        imgUri: imgUri,
        imgSet: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  componentWillMount() {
    const { edu } = this.props;
    const { imgUri } = edu;

    this.setState(
      {
        imgUri: require(`../../Data/Images/Education/${imgUri}`),
      },
      () => {
        if (!this.state.imgSet) this.getImg(edu.url);
      }
    );
  }

  render() {
    const { edu } = this.props;
    const { imgUri } = this.state;
    return (
      <React.Fragment>
        <Card border="dark" className="edu-card">
          <Card.Img className="card-img" variant="left" src={imgUri} />
          <Card.Body>
            <Card.Header as="h5">{edu.degree}</Card.Header>
            <Card.Title>{edu.university}</Card.Title>
            {/* <Card.Text></Card.Text> */}
            <Card.Text>{edu.location}</Card.Text>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default EducationCard;
