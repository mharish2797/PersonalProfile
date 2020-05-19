import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  Container,
  Row,
  Col,
  Image,
  Button,
} from "react-bootstrap";
import Modalar from "./Modalar";
class Certification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalShow: false,
    };
  }

  setModalShow = (variable) => {
    this.setState({
      modalShow: variable,
    });
  };

  render() {
    const { data } = this.props;

    return (
      <React.Fragment>
        {data.map((certificate) => (
          <React.Fragment>
            <ListGroup
              className="list-group"
              style={{ width: "50%", textAlign: "left" }}
            >
              <ListGroupItem key={certificate.title}>
                <Container>
                  <Row>
                    <Col>
                      <Image
                        rounded
                        width="71px"
                        height="60px"
                        src={require(`../../Data/Images/Honors/${certificate.image}`)}
                      ></Image>
                    </Col>
                    <Col>
                      {certificate.org} - {certificate.title}
                    </Col>
                    <Col>
                      <Button
                        variant="primary"
                        onClick={() => this.setModalShow(true)}
                      >
                        View Certificate
                      </Button>

                      <Modalar
                        displayUri={certificate.url}
                        show={this.state.modalShow}
                        onHide={() => this.setModalShow(false)}
                      />
                    </Col>
                  </Row>
                </Container>
              </ListGroupItem>
            </ListGroup>
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}

export default Certification;
