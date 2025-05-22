import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

// PUBLIC_INTERFACE
function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="logo">
            <span className="logo-symbol">🐯</span> Tiger Insights
          </div>
          <div className="nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} end>
              Introduction
            </NavLink>
            <NavLink to="/biology" className={({ isActive }) => isActive ? "active" : ""}>
              Biology
            </NavLink>
            <NavLink to="/behavior" className={({ isActive }) => isActive ? "active" : ""}>
              Behavior
            </NavLink>
            <NavLink to="/habitat" className={({ isActive }) => isActive ? "active" : ""}>
              Habitat
            </NavLink>
            <NavLink to="/conservation" className={({ isActive }) => isActive ? "active" : ""}>
              Conservation
            </NavLink>
            <NavLink to="/culture" className={({ isActive }) => isActive ? "active" : ""}>
              Culture
            </NavLink>
            <NavLink to="/ecosystem" className={({ isActive }) => isActive ? "active" : ""}>
              Ecosystem
            </NavLink>
            <NavLink to="/facts" className={({ isActive }) => isActive ? "active" : ""}>
              Facts
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
