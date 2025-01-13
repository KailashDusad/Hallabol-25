import React from 'react';
import './alert.css';

const Alert = ({ type = "info", message, onClose }) => {
  const getAlertStyle = () => {
    switch (type) {
      case "success":
        return "alert-success";
      case "error":
        return "alert-error";
      case "warning":
        return "alert-warning";
      default:
        return "alert-info";
    }
  };

  return (
    <div className={`alert-popup ${getAlertStyle()}`}>
      <div className="alert-message">{message}</div>
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Alert;
