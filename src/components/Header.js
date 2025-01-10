import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Hallabol</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/games">Games</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/team">Team</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/table">Table</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
