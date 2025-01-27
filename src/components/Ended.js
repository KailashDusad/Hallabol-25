import React from 'react';
import '../styles.css';
import halla from '../static/halla.png';
const Ended = () => {
  return (
    <div className="container mt-5 fade-in" style={{height:'69vh', width:'100vw', display:'flex', flexDirection:'column', justifyContent:'center'}}>
      <img src={halla} alt="Hallabol" className="img-fluid mx-auto d-block" style={{width:'200px'}} />
      <h2 className="text-center">Registration Period Ended</h2>
      <p className="text-center">Thank you for your interest in Hallabol. The registration period has ended. Stay tuned for future events!</p>
    </div>
  );
};

export default Ended;
