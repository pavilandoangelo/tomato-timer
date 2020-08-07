import React from "react";
import { ButtonGroup, Button, Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import Pomodoro from "./pomodoro";
import ShortBreak from "./short-break";
import LongBreak from "./long-break";
import { useHotkeys } from "react-hotkeys-hook";

export default function SectionIndex(props) {
  const [state, setState] = useState({
    active: "pomodoro",
    hasSwitch: false,
  });

  useHotkeys("alt+p", () => {
    setState({
      ...state,
      active: "pomodoro",
      hasSwitch: state.active !== "pomodoro",
    });
  });

  useHotkeys("alt+s", () => {
    setState({
      ...state,
      active: "short",
      hasSwitch: state.active !== "short",
    });
  });

  useHotkeys("alt+l", () => {
    setState({
      ...state,
      active: "long",
      hasSwitch: state.active !== "long",
    });
  });

  const handleOnClick = e => {
    return setState({
      ...state,
      active: e.target.value,
      hasSwitch: state.active !== e.target.value,
    });
  };

  return (
    <Row className="p-5" id="section">
      <Col>
        <Container>
          <Row>
            <Col>
              <ButtonGroup
                aria-label="Button Group"
                size="lg"
                className="col-7"
              >
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
          {state.active === "pomodoro" && (
            <Pomodoro hasSwitch={state.hasSwitch} />
          )}
          {state.active === "short" && (
            <ShortBreak hasSwitch={state.hasSwitch} />
          )}
          {state.active === "long" && <LongBreak hasSwitch={state.hasSwitch} />}
        </Container>
      </Col>
    </Row>
  );
}
