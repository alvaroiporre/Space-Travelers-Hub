import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

function NavBar() {
  return (
    <nav className="navbar">
      <h1>
        <img src={logo} alt="Space Travellers Logo" className="logo" />
        Space Travelers&apos; Hub
      </h1>
      <ul className="nav-menu">
        <li><NavLink exact to="/" activeclassname="active">Home</NavLink></li>
        <li><NavLink to="/rockets" activeclassname="active">Rockets</NavLink></li>
        <li><NavLink to="/missions" activeclassname="active">Missions</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
