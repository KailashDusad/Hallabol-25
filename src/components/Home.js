import React from 'react';
import Games from './Games';

const Home = () => (
  <>
    <section className="hero">
      <div className="hero-images">
        <img src="/static/play.png" alt="Play Icon" id="play" className="hero-img" />
        <img src="/static/halla.png" alt="Halla Icon" id="halla" className="hero-img" />
      </div>
      <div className="hero-icons">
        <div className="icon">
          <a href="https://www.instagram.com/hallabol_iitgn" target="_blank" rel="noopener noreferrer">
            <img src="/static/insta.png" alt="Instagram Icon" width="40" />
          </a>
        </div>
        <div className="icon">
          <a href="https://www.instagram.com/hallabol_iitgn" target="_blank" rel="noopener noreferrer">
            <img src="/static/git.png" alt="GitHub Icon" width="40" />
          </a>
        </div>
        <div className="icon">
          <a href="https://www.instagram.com/hallabol_iitgn" target="_blank" rel="noopener noreferrer">
            <img src="/static/face.png" alt="Facebook Icon" width="40" />
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
