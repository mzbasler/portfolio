import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Biography from './components/Biography/Biography';
import ServicesOffering from './components/ServicesOffering/ServicesOffering';
import SkillsTools from './components/SkillsTools/SkillsTools';
import WorkWithMe from './components/WorkWithMe/WorkWithMe';
import ArticlesPublications from './components/ArticlesPublications/ArticlesPublications';
import LatestWorks from './components/LatestWorks/LatestWorks';
import ThemeSwitcher from './components/ThemeSwitcher';
import Profiles from './components/Profiles/Profiles';
import './App.scss';

function App() {
    return (
        <div className="app-container">
            
            <Container>
            <ThemeSwitcher />
                <Row>
                    <Col md={3}>
                        <Biography />
                        <SkillsTools />
                        <Profiles />
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col>
                                <ServicesOffering />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ArticlesPublications />
                            </Col>
                            <Col>
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
