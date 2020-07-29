import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";

export default function Pomodoro(props) {
  const [state, setState] = useState({
    time: 1500, // 1500
    minutes: 0,
    seconds: 0,
    started: false,
    audio: new Audio("./sound.mp3"),
    playing: false,
  });

  const handleOnStart = () => {
    return setState(state => ({
      ...state,
      started: true,
    }));
  };

  const handleOnStop = () => {
    return setState(state => ({
      ...state,
      started: false,
    }));
  };

  const handleOnReset = () => {
    return setState(state => ({
      ...state,
      started: false,
      time: 1500,
      minutes: Math.floor(1500 / 60),
      seconds: 1500 % 60,
      playing: false,
    }));
  };

  const displayTime = () => {
    const minutes = Math.floor(state.time / 60);
    const seconds = state.time % 60;
    setState(state => ({ ...state, minutes: minutes, seconds: seconds }));
  };

  useEffect(() => {
    displayTime();
    state.audio.addEventListener("ended", () =>
      setState(state => ({ ...state, playing: false }))
    );
    return () => {
      state.audio.removeEventListener("ended", () =>
        setState(state => ({ ...state, playing: false }))
      );
    };
  }, []);

  useEffect(() => {
    if (state.playing) {
      state.audio.play();
    } else {
      state.audio.pause();
      state.audio.currentTime = 0;
    }
  }, [state.playing, state.audio]);

  useEffect(() => {
    if (state.started) {
      if (state.time > 0) {
        setTimeout(
          () => setState(state => ({ ...state, time: state.time - 1 })),
          1000
        );
      } else {
        setState(state => ({ ...state, playing: true }));
      }
      displayTime();
    }
  }, [state.time, state.started]);

  return (
    <>
      <Row>
        <Col>
          <span className="timer">
            {state.minutes < 10 ? "0" + state.minutes : state.minutes} :{" "}
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
            onClick={handleOnStart}
          >
            Start
          </Button>
        </Col>
        <Col xs={12} md={4} lg={2}>
          <Button
            variant="danger"
            size="lg"
            block
            className="btn-controls"
            onClick={handleOnStop}
          >
            Stop
          </Button>
        </Col>
        <Col xs={12} md={4} lg={2}>
          <Button
            variant="light"
            size="lg"
            block
            className="btn-controls"
            onClick={handleOnReset}
          >
            Reset
          </Button>
        </Col>
      </Row>
    </>
  );
}
