import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function Footer() {
  return (
    <Row className="p-2" id="footer">
      <Col>
        <Container>
          <Row>
            <Col>
              <h5 className="ml-5">
                <code>Keyboard Shortcuts</code>
              </h5>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <p>
                <code className="mr-2">ALT + P</code> Pomodoro
              </p>
              <p>
                <code className="mr-2">ALT + S</code> Short Break
              </p>
              <p>
                <code className="mr-2">ALT + L</code> Long Break
              </p>
              <p>
                <code className="mr-2">ALT + R</code> Reset Timer
              </p>
              <p>
                <code className="mr-2">SPACE</code> Stap or Stop the timer
              </p>
            </Col>
          </Row>
          <Row className="mt-4 mb-2">
            <Col>
              &copy;{" "}
              <a href="https://pavilandoangelo.github.io/" target="_nlank">
                Angelo Pavilando
              </a>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
}
