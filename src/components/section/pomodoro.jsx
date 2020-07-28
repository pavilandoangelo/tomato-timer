import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";

export default function Pomodoro(props) {
  const [state, setState] = useState({
    time: 1500,
    minutes: 0,
    seconds: 0,
  });

  // useEffect(() => {
  //   setState()
  //   const minutes = Math.floor(state.time / 60)
  //   console.log("minutes >>> ", minutes)
  //   const seconds = state.time % 60
  //   console.log("seconds >>> ", seconds)
  // }, [])

  useEffect(() => {
    // state.time > 0 &&
    //   setTimeout(() => setState({ ...state, time: state.time - 1 }), 1000);
    const minutes = Math.floor(state.time / 60);
    const seconds = state.time % 60;
    setState({ ...state, minutes: minutes, seconds: seconds });
  }, [state.time]);

  return (
    <>
      <Row>
        <Col>
          <span className="timer">
            {state.minutes} :{" "}
            {state.seconds < 10 ? "0" + state.seconds : state.seconds}
          </span>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <Col xs={12} md={4} lg={2}>
          <Button
            variant="success"
            size="lg"
            block
            className="btn-controls"
            style={{ textAlign: "center" }}
          >
            Start
          </Button>
        </Col>
        <Col xs={12} md={4} lg={2}>
          <Button variant="danger" size="lg" block className="btn-controls">
            Stop
          </Button>
        </Col>
        <Col xs={12} md={4} lg={2}>
          <Button variant="light" size="lg" block className="btn-controls">
            Stop
          </Button>
        </Col>
      </Row>
    </>
  );
}
