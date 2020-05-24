import React, { Component } from "react";
import emailjs from "emailjs-com";
import "../../css/ContactMe.scss";
import {
  Form,
  Button,
  Card,
  Tooltip,
  OverlayTrigger,
  Row,
  Col,
} from "react-bootstrap";
import { IconContext } from "react-icons";
import { GrLinkedin, GrMail, GrLocation } from "react-icons/gr";
import { FaGithub, FaDev, FaTwitter } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ContactMe extends Component {
  constructor(props) {
    super(props);
    const { data } = props;
    const iconSize = "50px";
    this.state = {
      contact: data["contact"],
      iconStyles: {
        linkedin: {
          styleValue: {
            color: "#0e76a8",
            size: iconSize,
            className: "global-class-name",
          },
          tag: <GrLinkedin />,
        },
        github: {
          styleValue: {
            color: "#000",
            size: iconSize,
            className: "global-class-name",
          },
          tag: <FaGithub />,
        },
        email: {
          styleValue: {
            color: "#FC4A1F",
            size: iconSize,
            className: "global-class-name",
          },
          tag: <GrMail />,
        },
        twitter: {
          styleValue: {
            color: "#1DA1F2",
            size: iconSize,
            className: "global-class-name",
          },
          tag: <FaTwitter />,
        },

        dev: {
          styleValue: {
            color: "#000",
            size: iconSize,
            className: "global-class-name",
          },
          tag: <FaDev />,
        },
      },
    };
    this.element = document.createElement("script");
    this.element.setAttribute("src", "https://www.google.com/recaptcha/api.js");
  }

  getIcons = () => {
    const { iconStyles, contact } = this.state;
    let result = [];

    for (let socialMedia in contact) {
      if (iconStyles.hasOwnProperty(socialMedia)) {
        const temp = {
          ...contact[socialMedia],
          ...iconStyles[socialMedia],
        };
        const socialTag = (
          <IconContext.Provider value={temp["styleValue"]}>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip id="button-tooltip">{temp["id"]}</Tooltip>}
            >
              <a href={temp["url"]} target="_blank" rel="noopener noreferrer">
                {temp["tag"]}
              </a>
            </OverlayTrigger>
          </IconContext.Provider>
        );
        result.push(socialTag);
      }
    }
    return result;
  };

  sendEmail = (content) => {
    const YOUR_TEMPLATE_ID = "template_u7S7m5pW";
    const YOUR_USER_ID = "user_jDtoR1wzdDLo7ecxyJY0U";
    const YOUR_SERVICE_ID = "gmail";

    content.preventDefault();

    let emessage = {
      from_name: content.target.from_name.value,
      reply_to: content.target.reply_to.value,
      message: content.target.message.value,
      subject: content.target.subject.value,
    };
    console.log(content.target);

    console.log(emessage);

    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, emessage, YOUR_USER_ID)
      .then(
        (result) => {
          console.log(result.text);
          toast("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
          toast.dark("Error occured, please try again");
        }
      );
  };

  componentWillMount() {
    document.getElementsByTagName("head").item(0).appendChild(this.element);
  }

  componentWillUnmount() {
    document.getElementsByTagName("head").item(0).removeChild(this.element);
  }

  render() {
    const iconTags = this.getIcons();
    return (
      <React.Fragment>
        <Card className="social-iconset mx-auto" bg="white" text="dark">
          <Card.Body>
            <Card.Text>
              {iconTags.map((tag, index) => (
                <React.Fragment key={index}> {tag} &emsp; </React.Fragment>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="contact-card mx-auto" bg="dark" text="light">
          <Card.Title className="text-center">Contact</Card.Title>
          <Form method="POST" onSubmit={this.sendEmail}>
            <Form.Group controlId="from_name">
              <Form.Control required type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="reply_to">
              <Form.Control required type="email" placeholder="Email ID" />
              <Form.Text className="text-white">
                Your privacy is valued.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="subject">
              <Form.Control required type="text" placeholder="Subject" />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Control
                required
                as="textarea"
                rows="3"
                placeholder="Message..."
              />
            </Form.Group>
            <div
              className="g-recaptcha"
              data-sitekey="6LeScfoUAAAAAIBBpGFLIkYYgf5cAxN5lpa5vCGI"
            ></div>
            <br />
            <Form.Group as={Row}>
              <Col style={{ textAlign: "center" }}>
                <Button
                  className="justify-content-center"
                  variant="outline-light "
                  type="submit"
                >
                  Submit
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Card>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Card className="social-iconset mx-auto" bg="white" text="dark">
          <Card.Body>
            <Card.Text>
              <GrLocation /> <small>Seattle, WA </small>
            </Card.Text>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default ContactMe;
