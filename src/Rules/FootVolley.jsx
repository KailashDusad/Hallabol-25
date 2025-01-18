import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Rules.css'

const FootVolley = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className='main-container'>
        <Helmet>
                <title>Foot-Volley</title>
            </Helmet>
            <div className="games-section">
                <div className="sports-heading">
                    <h1>Foot-Volley</h1>
                </div>
                <div className="sports-item-heading">
                    <h2>Team Formation Rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li>Team composition: 5 (on field) + 1 (substitute) – 6 players.</li>
                    <li>The team should comprise players from a minimum of 2 different batches. (eg: BTech ‘18, MTech ‘20, PhD ‘19)</li>

                    <li>Faculty and Staff will be considered a different batch.</li>
                    <li>Teams can consist of both male and female players.</li>
                    
                </ul>
                <div className="sports-item-heading">
                    <h2>Pool Players:</h2>
                </div>
                <ul className='guidlines'>
                    <li>Pool Players...</li>




                </ul>
                <div className="sports-item-heading">
                    <h2>Game Rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li>
                    Only one bounce inside your half is allowed every time the ball crosses the net.
                    </li>
                    <li>
                    Maximum touches allowed = 3 (i.e., maximum 2 passes allowed between the players, and the 3rd hit should cross the net onto the opposite side).
                    </li>
                    <li>
                    Every player has to play at least 1 set.
                    </li>
                    <li>
                    Consecutive touches by a player are not allowed. Alternate touches are allowed.
                    </li>
                    <li>
                    Players must play on the whistle.
                    </li>
                    <li>
                    If any player touches the net at any point of time during a rally, their team loses the point.
                    </li>
                    <li>
                    No player can cross any part of their body over the net onto the opposite side’s court while hitting the ball.
                    </li>
                    <li>
                    Ball bouncing on the boundary lines is counted as IN.

                    </li>
                    <li>The ball can be served by tossing and kicking it without bouncing on the ground. Missing to hit the ball will result in losing the point and the serve.</li>
                    <li>
                    A player can serve at max 2 times as long as the service does not break.
                    </li>
                    <li>
                    Service breaks if the team loses a point. The same player can't resume the service when they win their next point.
                    </li>
                    <li>After a player has served once, he or she can only serve again once all the teammates have served at least once.
                    </li>
                    <li>Girls may use their hands for service and playing. But if the team consists of more than one girl, then only one girl member can use her arm.</li>
                    <li>
                    Girls can use their hands behind the 2 meters line only.

                    </li>
                    <li>
                    Using your hands in front of it is not allowed.
                        
                    </li>
                    <li>
                    Girls may use their arms but only under shoulder level.
                        
                    </li>
                    <li>
                    Overarm shots are not allowed.
                        
                    </li>
                    <li>
                    In-game substitutions are allowed at completion of half-set (8/15 or 12/25) or full set only.
                        
                    </li>
                    <li>Referee judgments are final.</li>

                </ul>

                <div className="sports-item-heading">
                    <h2>For any queries contact :</h2>
                </div>
                <ul className='guidlines'>
                                <li>
                                Anjana S A  | Mob1
                             </li>
                                <li>
                                Vishal  | Mob2
                                </li>
                            </ul>
                <div className="register-button">
                <Link to="/register?game=Foot-voley">Register Now</Link>

                </div>
            </div>


        </div>
  )
}

export default FootVolley
