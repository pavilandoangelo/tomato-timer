import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import Header from "../components/header"
import Section from "../components/section/index"
import "../styles/index.scss"

export default function Home() {
  return (
    <>
      <Header />
      <Section />
      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}
