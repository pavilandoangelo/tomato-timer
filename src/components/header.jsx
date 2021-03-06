import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar id="header" className="row">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="./tomato.svg"
            width="50"
            height="50"
            className="d-inline-block align-middle"
          />{" "}
          Tomato Timer
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
