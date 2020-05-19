import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "../../css/ExperienceCard.scss";
import axios from "axios";
import * as Icon from "react-bootstrap-icons";

class ExperienceCard extends Component {
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
    console.log(maxObj[0].total);

    if (maxObj[0].total > 2400) return maxObj[0].url;
    else return this.state.imgUri;
  };

  getImg = async (site) => {
    let domain = site.replace("https://", "");
    domain = domain.substr(0, domain.indexOf("/"));
    let url = `http://favicongrabber.com/api/grab/${domain}?pretty=true`;
    console.log(url);

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
    const { exp } = this.props;
    const { imgUri } = exp;

    this.setState(
      {
        imgUri: require(`../../Data/Images/Experience/${imgUri}`),
      },
      () => {
        if (!this.state.imgSet) this.getImg(exp.url);
      }
    );
  }

  render() {
    const { exp } = this.props;
    const { imgUri } = this.state;
    return (
      <React.Fragment>
        <Card border="dark" className="exp-card">
          <Card.Img className="card-img" variant="left" src={imgUri} />
          <Card.Body>
            <Card.Header as="h5">{exp.title}</Card.Header>
            <Card.Title>
              <a target="_blank" rel="noopener noreferrer" href={exp.url}>
                {exp.team}
              </a>
              , <span style={{ fontSize: "80%" }}>{exp.org}</span>
            </Card.Title>
            <Card.Text>
              {exp.start} - {exp.end}
              <br />
              <ListGroup horizontal="lg" className="list-group">
                <ListGroupItem>
                  {exp.details.map((course) => (
                    <React.Fragment>
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

export default ExperienceCard;
