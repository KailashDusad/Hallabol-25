import React from 'react';
import { Link } from 'react-router-dom';
import Cric from '../static/games/GullyCricket.jpeg'
import KhoKho from '../static/games/KhoKho.jpeg'
import Futsal from '../static/games/Futsal.jpg'
import Tug from '../static/games/TugOfWar.jpg'
import FootV from '../static/games/FootVolley.jpg'
import BadM from '../static/games/Badminton.jpg'
import Saven from '../static/games/SevenStones.jpg'
import Frisbee from '../static/games/UltimateFrisbee.jpg'
import Throwball from '../static/games/Throwball.jpg'
import Carrom from '../static/games/Carrom.jpg'
import Dodge from '../static/games/Dodgeball.jpg'
import Chess from '../static/games/Chess.jpg'


const Games = () => (
  <section id="games" className="game-section">
    <div className="container">
      <h2>Explore The Games</h2>
      <div className="row">
        {[
          { img: Cric, title: 'Gully Cricket', desc: 'Form your team and showcase your skills.', id:'GullyCricket'},
          { img: KhoKho, title: 'Kho-Kho', desc: 'Experience the thrill of speed and strategy.', id:'KhoKho'},
          { img: Futsal, title: 'Futsal', desc: 'Small field, big excitement!', id:'Footsal'},
          { img: Tug, title: 'Tug of War', desc: 'Pull your way to victory.', id:'TugofWar'},
          { img: FootV, title: 'Foot Volley', desc: 'Volleyball with a twist.', id:'FootVolley'},
          { img: BadM, title: '4-a-side Baddy', desc: 'Fast-paced badminton action.', id:'Badminton'},
          { img: Saven, title: 'Seven Stone', desc: 'A game of skill and precision.', id:'SevenStones'},
          { img: Frisbee, title: 'Freesbe', desc: 'Frisbee with a competitive edge.', id:'Frisbee'},
          { img: Throwball, title: 'Throw Ball', desc: 'A game of skill and strategy.' , id:'Throwball'},
          { img: Carrom, title: 'Carrom', desc: 'A game of skill and precision.', id:'Carrom'},
          { img: Dodge, title: 'Dodge Ball', desc: 'Dodge, duck, dip, dive and dodge.', id:'Dodgeball'},
          { img: Chess, title: 'Chess', desc: 'The ultimate test of strategy.', id:'Chess'},
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