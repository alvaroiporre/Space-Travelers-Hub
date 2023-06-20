import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

function NavBar() {
  return (
    <nav>
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li><NavLink exact to="/" activeclassname="active">Home</NavLink></li>
        <li><NavLink to="/rockets" activeclassname="active">Rockets</NavLink></li>
        <li><NavLink to="/missions" activeclassname="active">Missions</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
