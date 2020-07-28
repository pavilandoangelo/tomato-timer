import React from "react";
import { ButtonGroup, Button, Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import Pomodoro from "./pomodoro";
import ShortBreak from "./short-break";

export default function SectionIndex(props) {
  const [state, setState] = useState({
    active: "pomodoro",
  });

  const handleOnClick = e => {
    return setState({ ...state, active: e.target.value });
  };

  return (
    <Row className="p-5" id="section">
      <Col>
        <Container>
          <Row>
            <Col>
              <ButtonGroup aria-label="Button Group" size="lg">
                <Button
                  variant="secondary"
                  className={state.active === "pomodoro" ? "active" : ""}
                  onClick={handleOnClick}
                  value="pomodoro"
                >
                  Pomodoro
                </Button>
                <Button
                  variant="secondary"
                  className={state.active === "short" ? "active" : ""}
                  onClick={handleOnClick}
                  value="short"
                >
                  Short Break
                </Button>
                <Button
                  variant="secondary"
                  className={state.active === "long" ? "active" : ""}
                  onClick={handleOnClick}
                  value="long"
                >
                  Long Break
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
          {state.active === "pomodoro" && <Pomodoro />}
          {state.active === "short" && <ShortBreak />}
        </Container>
      </Col>
    </Row>
  );
}
