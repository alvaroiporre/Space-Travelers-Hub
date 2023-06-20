import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/rockets" activeClassName="active">Rockets</NavLink></li>
        <li><NavLink to="/missions" activeClassName="active">Missions</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
