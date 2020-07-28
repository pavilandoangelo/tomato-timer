import React from "react";
import { Row, Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar id="header">
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
