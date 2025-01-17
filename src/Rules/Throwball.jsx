import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Rules.css'

const Throwball = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='main-container'>
            <Helmet>
                <title>Throwball</title>
            </Helmet>
            <div className="games-section">
                <div className="sports-heading">
                    <h1>Throwball [*Girls Event]</h1>
                </div>
                <div className="sports-item-heading">
                    <h2>Team Formation Rules:</h2>
                </div>
                <ul className='guidlines'>
                <li> The total number of players in each team can be 6 (5 on field + 1 substitute).</li>
                <li> Team should comprise of players from a minimum of 2 different batches. (eg: BTech ‘20, MTech ‘20, PhD ‘19)</li>
                <li> Faculty and Staff will be considered a different batch.</li>
                <li> Teams can only consist of female players.</li>

               
                </ul>
                <div className="sports-item-heading">
                    <h2>Game Rules:</h2>
                </div>
                <ul className='guidlines'>

                <li>A match shall consist of 3 sets for 25, 25, and 15 points respectively.</li>
                <li>Double touch (juggling the ball in both hands) is not allowed while receiving the service ball.</li>
                <li>Players cannot catch the ball with the support of their body or legs.</li>
                <li>The ball should be served after the whistle and within 5 sec.</li>
                <li>The ball should be served after the whistle and within 5 sec. The ball should be served (Throwing) without crossing the service line with a single hand. The serve should be done below the shoulder line (underarm).</li>
                <li>Each player is allowed a maximum two consecutive serves.</li>
                <li>Any ball after catching should be released within 3 seconds with 1 hand. Any ball being released should be done so from on or above the shoulder line only.</li>
                <li>While throwing the ball you could only move 1 step. A player cannot jump when throwing the ball.</li>
                <li>The players have to catch the ball with both hands and return it by one hand only.</li>
                <li>The ball should be thrown from the same side from which the player catches the ball.</li>
                <li>Internal passing between the team is not allowed.</li>
                <li>Players cannot touch the net during the play but the ball can touch the net.</li>
                <li>A player while releasing the ball cannot rotate (360 degrees) or turn around to throw the ball.</li>
                <li>During catching or releasing, the ball should not touch any part of the body except the palm.</li>
                <li>2 players cannot catch the ball simultaneously.</li>
                <li>Any ball falling on the sideline or end-line is a good ball.</li>
                <li>Umpire decision is final (no exceptions). Even if it was a wrong call from the Umpire, the decision stays.</li>

                </ul>

                <div className="sports-item-heading">
                    <h2>Guidelines:</h2>
                </div>
                <ul className='guidlines'>
                <li>The game would be played on the Girls Volleyball Court facing the Aibaan Hall.</li>
                <li>The teams are expected to inform if any delay in reaching the ground, to the organisers as early as possible. </li>
                <li>There would be 2 organisers and 3 members with 2 ball boys/outside checkers would stay on the ground. The umpires would be one amongst the organisers while the ball boys would be from the organising team.</li>
                </ul>

                <div className="sports-item-heading">
                    <h2>For any queries contact :</h2>
                </div>
                <ul className='guidlines'>
                                <li>
                                Coordi1 | Mob1
                             </li>
                                <li>
                                Coordi2  | Mob2
                                </li>
                            </ul>
                <div className="register-button">
                <Link to="/register?game=Throw Ball">Register Now</Link>

                </div>

            </div>


        </div>
    )
}

export default Throwball
