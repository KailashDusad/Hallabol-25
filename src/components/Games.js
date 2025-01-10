import React from 'react';
import { Link } from 'react-router-dom';

const Games = ({ setSelectedGame }) => (
  <section id="games" className="game-section">
    <div className="container">
      <h2>Explore The Games</h2>
      <div className="row">
        {[
          { img: '/static/cric.jpeg', title: 'Gully Cricket', desc: 'Form your team and showcase your skills.' },
          { img: '/static/kho.jpeg', title: 'Kho-Kho', desc: 'Experience the thrill of speed and strategy.' },
          { img: '/static/g2.jpg', title: 'Futsal', desc: 'Small field, big excitement!' },
          { img: '/static/g2.jpg', title: 'Tug of War', desc: 'Pull your way to victory.' },
          { img: '/static/g2.jpg', title: 'Foot Volley', desc: 'Volleyball with a twist.' },
          { img: '/static/g2.jpg', title: '4-a-side Baddy', desc: 'Fast-paced badminton action.' },
          { img: '/static/g2.jpg', title: 'Seven Stone', desc: 'A game of skill and precision.' },
          { img: '/static/g2.jpg', title: 'Freesbe', desc: 'Frisbee with a competitive edge.' },
          { img: '/static/g2.jpg', title: 'Throw Ball', desc: 'A game of skill and strategy.' },
        ].map((game, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="game-card">
              <img src={game.img} alt={game.title} />
              <div className="p-3">
                <h5>{game.title}</h5>
                <p>{game.desc}</p>
                <Link to={`/rules/${game.title}`} className="btn" onClick={() => setSelectedGame(game.title)}>Register</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Games;