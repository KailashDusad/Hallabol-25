import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container-fluid">
      <div className="d-flex align-items-center">
        <img src="/static/halla.png" alt="Hallabol Logo" width="40" className="me-2" />
        <Link className="navbar-brand" to="/">Hallabol</Link>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" style={{marginLeft:'0.5rem'}} id="navbarNav">
        <ul className="navbar-nav">
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
