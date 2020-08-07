import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useHotkeys } from "react-hotkeys-hook";

export default function LongBreak(props) {
  console.log("props >>> ", props);
  const [state, setState] = useState({
    time: 600, // 600
    minutes: 0,
    seconds: 0,
    started: false,
    audio: null,
    playing: false,
  });

  useHotkeys(
    "space",
    () => {
      setTimeout(() => {
        if (!state.started) {
          return handleOnStart();
        }

        return handleOnStop();
      }, 500);
    },
    [state.started]
  );

  useHotkeys("alt+r", () => {
    setTimeout(() => {
      return handleOnReset();
    }, 500);
  });

  const handleOnStart = () => {
    if (!state.started) {
      return setState(state => ({
        ...state,
        started: true,
      }));
    }
    return;
  };

  const handleOnStop = () => {
    if (state.started) {
      return setState(state => ({
        ...state,
        started: false,
      }));
    }
    return;
  };

  const handleOnReset = () => {
    return setState(state => ({
      ...state,
      started: false,
      time: 600,
      minutes: Math.floor(600 / 60),
      seconds: 600 % 60,
      playing: false,
    }));
  };

  const displayTime = () => {
    let minutes = Math.floor(state.time / 60);
    let seconds = state.time % 60;
    minutes = minutes < 0 ? 0 : minutes;
    seconds = seconds < 0 ? 0 : seconds;
    setState(state => ({ ...state, minutes: minutes, seconds: seconds }));
  };

  useEffect(() => {
    return () => {
      if (state.audio) {
        state.audio.pause();
      }
    };
  });

  useEffect(() => {
    displayTime();
    setState(state => ({ ...state, audio: new Audio("./sound.mp3") }));
  }, []);

  useEffect(() => {
    if (state.audio) {
      if (state.playing) {
        state.audio.play();
      } else {
        state.audio.pause();
        state.audio.currentTime = 0;
      }
    }
  }, [state.playing, state.audio]);

  useEffect(() => {
    let timer = null;

    if (state.started) {
      if (state.time > 0) {
        timer = setTimeout(
          () => setState(state => ({ ...state, time: state.time - 1 })),
          1000
        );
      } else {
        setState(state => ({ ...state, playing: true }));
      }
      displayTime();
    } else {
      if (timer) {
        clearTimeout(timer);
      }
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
            onClick={() => {
              setTimeout(() => {
                handleOnStart();
              }, 500);
            }}
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
            onClick={() => {
              setTimeout(() => {
                handleOnStop();
              }, 500);
            }}
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
