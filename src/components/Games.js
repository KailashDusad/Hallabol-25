import React from 'react';
import { Link } from 'react-router-dom';

const Games = () => (
  <section id="games" className="game-section">
    <div className="container">
      <h2>Explore The Games</h2>
      <div className="row">
        {[
          { img: '/static/games/GullyCricket.jpeg', title: 'Gully Cricket', desc: 'Form your team and showcase your skills.', id:'GullyCricket'},
          { img: '/static/games/KhoKho.jpeg', title: 'Kho-Kho', desc: 'Experience the thrill of speed and strategy.', id:'KhoKho'},
          { img: '/static/games/Futsal.jpg', title: 'Futsal', desc: 'Small field, big excitement!', id:'Footsal'},
          { img: '/static/games/TugOfWar.jpg', title: 'Tug of War', desc: 'Pull your way to victory.', id:'TugofWar'},
          { img: '/static/games/FootVolley.jpg', title: 'Foot Volley', desc: 'Volleyball with a twist.', id:'FootVolley'},
          { img: '/static/games/Badminton.jpg', title: '4-a-side Baddy', desc: 'Fast-paced badminton action.', id:'Badminton'},
          { img: '/static/games/SevenStones.jpg', title: 'Seven Stone', desc: 'A game of skill and precision.', id:'SevenStones'},
          { img: '/static/games/UltimateFrisbee.jpg', title: 'Freesbe', desc: 'Frisbee with a competitive edge.', id:'Frisbee'},
          { img: '/static/games/Throwball.jpg', title: 'Throw Ball', desc: 'A game of skill and strategy.' , id:'Throwball'},
          { img: '/static/games/Carrom.jpg', title: 'Carrom', desc: 'A game of skill and precision.', id:'Carrom'},
          { img: '/static/games/Dodgeball.jpg', title: 'Dodge Ball', desc: 'Dodge, duck, dip, dive and dodge.', id:'Dodgeball'},
          { img: '/static/games/Chess.jpg', title: 'Chess', desc: 'The ultimate test of strategy.', id:'Chess'},
        ].map((game, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="game-card">
              <img src={game.img} alt={game.title} />
              <div className="p-3">
                <h5>{game.title}</h5>
                <p>{game.desc}</p>
                <Link to={`/rules/${game.id}`} className="btn">Register</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Games;