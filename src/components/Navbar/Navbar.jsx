// Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation(); // Import useLocation from react-router-dom

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">Movie Voting System</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className={`nav-item ${location.pathname === "/" ? 'active' : ''}`}>
              <Link className="nav-link" to="/movie-list">Movie List</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/movie-list" ? 'active' : ''}`}>
              <Link className="nav-link" to="/voting-form">Voting Form</Link>
            </li>
            <li className={`nav-item ${location.pathname === "/voting-form" ? 'active' : ''}`}>
              <Link className="nav-link" to="/admin-panel">Admin Panel</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
