import React from "react"
import { Row, Navbar, Container } from "react-bootstrap"

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
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
