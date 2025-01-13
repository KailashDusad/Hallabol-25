import React from 'react';
import Games from './Games';

const Home = () => (
  <>
  <section className="hero">
  <div>
    <div style={{
    zIndex: -10, opacity: 0.8, position: 'absolute', top: '-15%',
    left: 0, width: '100%', height: '93vh'
    }}>
    {/* <video autoPlay muted loop>
      <source src="/static/video.mp4" type="video/mp4" />
    </video> */}
    </div>
    <div style={{
    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
    }}>
    <img src="/static/play.png" alt="" id="play" />
    <a href="/games" className="btn">Register Now</a>
    </div>
    <div className="hero-icons">
    <div className="icon">
      <a href="https://www.instagram.com/hallabol_iitgn" target="_blank" rel="noopener noreferrer">
        <img src="./static/insta.png" alt="Icon 1" width="40" />
      </a>
    </div>
    <div className="icon">
      <a href="https://www.instagram.com/hallabol_iitgn" target="_blank" rel="noopener noreferrer">
        <img src="./static/git.png" alt="Icon 2" width="40" />
      </a>
    </div>
    <div className="icon">
      <a href="https://www.instagram.com/hallabol_iitgn" target="_blank" rel="noopener noreferrer">
        <img src="./static/face.png" alt="Icon 3" width="40" />
      </a>
    </div>
  </div>
  </div>
  </section>
  <section>
    <Games />
  </section>
  </>
);

export default Home;
