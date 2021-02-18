import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarTitle from "./NavbarTitle";

class Navbarmenu extends Component {
  render() {
    return (
      <Navbar
        style={{ backgroundColor: "#264653", height: "4rem" }}
        expand="lg"
      >
        <Navbar.Brand style={{ color: "#E76F51" }}>
          <NavbarTitle />
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Navbarmenu;
