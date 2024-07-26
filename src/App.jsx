import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Biography from "./components/Biography/Biography";
import Board from "./components/Board/Board";
import SkillsTools from "./components/SkillsTools/SkillsTools";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Profiles from "./components/Profiles/Profiles";
import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <Container>
        <ThemeSwitcher />
        <Row>
          <Col md={4}>
            <Profiles />
            <Biography />
            <SkillsTools />
          </Col>
          <Col md={8}>
            <Row>
              <Col>
                <Board />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
