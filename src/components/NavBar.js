import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <navbar className="Navbar">
      <nav className='Nav-header'>
      <h1 className="Nav-logo">
          <NavLink to="/bookstore/" rel="noopener noreferrer">
            Bookstore CMS
          </NavLink>
        </h1>
        <ul>
          <li>
            <NavLink to="/bookstore/" rel="noopener noreferrer">
              Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/Categories/" rel="noopener noreferrer">
              Categories
            </NavLink>
          </li>
        </ul>
      </nav>
    </navbar>
  );
}

export default Nav;