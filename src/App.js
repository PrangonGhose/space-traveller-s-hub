import { Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import { RxDividerVertical } from 'react-icons/rx';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import planetBlack from './images/planet-black.png';
import RocketPage from './pages/rocketPage';
import MissionPage from './pages/missionPage';
import DragonPage from './pages/dragonPage';
import ProfilePage from './pages/profilePage';

const App = () => (
  <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="./">
          <img
            src={planetBlack}
            width="40"
            height="40"
            className="d-inline-block justify-content-center"
            alt="React Bootstrap logo"
          />
          {' '}
          Space Traveller&apos;s Hub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end navbar-collapse">
            <Link className="nav-link" to="./">Rockets</Link>
            <RxDividerVertical className="react-icons" />
            <Link className="nav-link" to="/missionPage">Missions</Link>
            <RxDividerVertical className="react-icons" />
            <Link className="nav-link" to="/dragonPage">Dragons</Link>
            <RxDividerVertical className="react-icons" />
            <Link className="nav-link" to="/profilePage">My Profile</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Routes>
      <Route path="/" element={<RocketPage />} />
      <Route path="/missionPage" element={<MissionPage />} />
      <Route path="/dragonPage" element={<DragonPage />} />
      <Route path="/profilePage" element={<ProfilePage />} />
    </Routes>
  </>
);

export default App;
