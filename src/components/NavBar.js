import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/rockets">Rockets</NavLink></li>
        <li><NavLink to="/missions">Missions</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
