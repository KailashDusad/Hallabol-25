import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Header.css'; 
import Halla from '../static/halla.png';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container-fluid">
      <div className="d-flex align-items-center">
        <img src={Halla} alt="Hallabol Logo" width="40" className="me-2" />
        <NavLink className="navbar-brand" to="/" exact>Hallabol</NavLink>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" style={{marginLeft:'0.5rem'}} id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><NavLink className="nav-link" to="/" exact activeClassName="active">Home</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/register" activeClassName="active">Register</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/games" activeClassName="active">Games</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/team" activeClassName="active">Team</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/table" activeClassName="active">Table</NavLink></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
