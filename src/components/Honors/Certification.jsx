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
            <ListGroup>
              <ListGroupItem key={certificate.title}>
                <Container fluid>
                  <Row>
                    <Col md={2} lg={2}>
                      <Image
                        rounded
                        width="30%"
                        height="50%"
                        src={require(`../../Data/Images/Honors/${certificate.image}`)}
                      ></Image>
                    </Col>
                    <Col>
                      <h5>{certificate.title} </h5> {certificate.org}
                    </Col>
                    <Col md={3} lg={3}>
                      <Button
                        target="_blank"
                        variant="outline-dark"
                        href={certificate.url}
                      >
                        View Certificate
                      </Button>

                      {/* <Modalar
                        displayUri={certificate.url}
                        show={this.state.modalShow}
                        onHide={() => this.setModalShow(false)}
                      /> */}
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
