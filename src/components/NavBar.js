import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <nav>
      <ul>
        <li><NavLink exact to="/" activeClassName="active" style={activeStyle}>Home</NavLink></li>
        <li><NavLink to="/rockets" activeClassName="active" style={activeStyle}>Rockets</NavLink></li>
        <li><NavLink to="/missions" activeClassName="active" style={activeStyle}>Missions</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
