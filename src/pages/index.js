import React, { Fragment } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Header from "../components/header";
import Section from "../components/section/index";
import Footer from "../components/footer";
import "../styles/index.scss";

export default function Home() {
  return (
    <Container fluid>
      <Header />
      <Section />
      <Footer />
    </Container>
  );
}
