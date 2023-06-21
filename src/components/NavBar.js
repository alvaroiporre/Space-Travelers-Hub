import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="flex">
        <img src={logo} alt="Space Travellers Logo" className="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className="nav-menu">
        <li><NavLink to="/" activeclassname="active">Rockets</NavLink></li>
        <li><NavLink to="/missions" activeclassname="active">Missions</NavLink></li>
        <li><span className='line'/><NavLink exact to="/my-profile" activeclassname="active">My Profile</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
