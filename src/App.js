import { Route, Routes, NavLink } from 'react-router-dom';
import React, { useEffect } from 'react';
import { RxDividerVertical } from 'react-icons/rx';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';

import planetBlack from './images/planet-black.png';
import RocketPage from './pages/rocketPage';
import MissionPage from './pages/missionPage';
import DragonPage from './pages/dragonPage';
import ProfilePage from './pages/profilePage';
import { getApiRockets } from './redux/Rocket/Rocket';
import { getDragonApi } from './redux/Dragon/Dragon';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApiRockets());
    dispatch(getDragonApi());
  }, [dispatch]);

  return (
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
              <NavLink className="nav-link" to="/">Rockets</NavLink>
              <RxDividerVertical className="react-icons" />
              <NavLink className="nav-link" to="/missionPage">Missions</NavLink>
              <RxDividerVertical className="react-icons" />
              <NavLink className="nav-link" to="/dragonPage">Dragons</NavLink>
              <RxDividerVertical className="react-icons" />
              <NavLink className="nav-link" to="/profilePage">My Profile</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" exact element={<RocketPage />} />
        <Route path="/missionPage" exact element={<MissionPage />} />
        <Route path="/dragonPage" exact element={<DragonPage />} />
        <Route path="/profilePage" exact element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
