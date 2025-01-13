import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './error.css';

const ErrorPage = () => {
  const location = useLocation();
  const message = location.state?.message || "Something went wrong!";

  return (
    <div className="error-container">
      <div className="error-content">
        <h1>Error</h1>
        <p>{message}</p>
        <Link to="/register" className="btn">Go Back to Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;