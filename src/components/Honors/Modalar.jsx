import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import Iframe from "react-iframe";

class Modalar extends Component {
  render() {
    const { show, onHide } = this.props;

    return (
      <Modal
        backdrop={true}
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Certificate
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Iframe
            allowFullScreen
            src="http://www.youtube.com/embed/xDMP3i36naA"
            fluid
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Modalar;
