import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Biography from './components/Biography';
import ServicesOffering from './components/ServicesOffering';
import SkillsTools from './components/SkillsTools';
import WorkWithMe from './components/WorkWithMe';
import ArticlesPublications from './components/ArticlesPublications';
import LatestWorks from './components/LatestWorks';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.scss';

function App() {
    return (
        <div className="app-container">
            
            <Container>
            <ThemeSwitcher />
                <Row>
                    <Col md={4}>
                        <Biography />
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col md={6}>
                                <ServicesOffering />
                            </Col>
                            <Col md={6}>
                                <SkillsTools />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <ArticlesPublications />
                            </Col>
                            <Col md={6}>
                                <WorkWithMe />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <LatestWorks />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
