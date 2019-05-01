import React from "react"
import "./App.css"
import ProfileImg from "./components/ProfileImg"
import Quote from "./components/Quote"
import Bio from "./components/Bio"
import Skills from "./components/Skills"
import { Row, Col } from "antd"

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="top-image">
          <Quote />
        </div>
        <div className="card-container">
          <ProfileImg />
          <Row>
            <div style={{ marginTop: "-55px" }}>
              <Col md={12}>
                <Bio />
              </Col>
              <Col md={12}>
                <Skills />
              </Col>
            </div>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default App
