import React from 'react';
import Games from './Games';
import Insta from '../static/insta.png';
import Git from '../static/git.png';
import Face from '../static/face.png';
import Play from '../static/play.png';
import Halla from '../static/halla.png';


const Home = () => (
  <>
    <section className="hero">
      <div className="hero-images">
        <img src={Play} alt="Play Icon" id="play" className="hero-img" />
        <img src={Halla} alt="Halla Icon" id="halla" className="hero-img" />
      </div>
      <div className="hero-icons">
        <div className="icon">
          <a href="https://www.instagram.com/hallabol_iitgn" target="_blank" rel="noopener noreferrer">
            <img src={Insta} alt="Instagram Icon" width="40" />
          </a>
        </div>
        <div className="icon">
          <a href="https://www.instagram.com/hallabol_iitgn" target="_blank" rel="noopener noreferrer">
            <img src={Git} alt="GitHub Icon" width="40" />
          </a>
        </div>
        <div className="icon">
          <a href="https://www.instagram.com/hallabol_iitgn" target="_blank" rel="noopener noreferrer">
            <img src={Face} alt="Facebook Icon" width="40" />
          </a>
        </div>
      </div>
    </section>
    <section>
      <Games />
    </section>
  </>
);

export default Home;
