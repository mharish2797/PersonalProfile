import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../css/NavigBar.scss";

export class NavigBar extends Component {
  filterHeaders = ["home", "honors"];
  camelCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  render() {
    const { data, click } = this.props;
    const sections = Object.keys(data)
      .filter((datum) => !this.filterHeaders.includes(datum))
      .map((datum) => (
        <Nav.Link onClick={() => click(datum)} key={datum}>
          {this.camelCase(datum)}
        </Nav.Link>
      ));

    const accolades = Object.keys(data["honors"]).map((entry) => (
      <NavDropdown.Item onClick={() => click(entry)} key={entry}>
        {this.camelCase(entry)}
      </NavDropdown.Item>
    ));

    return (
      <React.Fragment>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="lg"
          className="bg-color-gradient"
          variant="dark"
        >
          <Navbar.Brand onClick={() => click("home")}>
            Harish's Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {sections}
              <NavDropdown title="Honors" id="collasible-nav-dropdown">
                {accolades}
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link onClick={() => click("contact")}>Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavigBar;
