import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Rules.css'

const Dodgeball = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='main-container'>
            <div className="games-section">
                <div className="sports-heading">
                    <h1>Dodgeball</h1>
                </div>
                <div className="sports-item-heading">
                    <h2>Team Formation Rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li>Teams can be comprised of both male and female players </li>
                    <li>Every Team must have five players on field and one extra substitute player (5+1). </li><li> There should be players from minimum two batches in a Team </li>
                    <li>M-tech, PhD and Faculty will be considered different batches. </li>
                    <li> If a team has a girl member in it, the team will have to dodge for 1 min 45 sec instead of 2 min. The time reduced will be 15 sec only in the first round, regardless of the number of girls that you take in your team (refer to game rules). </li>
                    <li> In case of any injury/absence of a player, you may only play with unregistered players.</li>



                </ul>
                <div className="sports-item-heading">
                    <h2>Game Rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li> Each match consists of 2 games. </li>
                    <li> The first game would be a conventional Dodge Ball of 2 mins (If a team has a girl member, the time would be reduced to 1 min 45 sec). </li>
                    <li> The second game will have 2 balls for 1 min. </li>
                    <li>In case of a draw round 2 would be repeated. </li>
                    <li>The points would be calculated on the basis of the number of people getting out: </li>
                    <li>Those who get hit by the ball below the shoulder level (If they are hit on the head, they won’t be considered as out unless they bring their head intentionally) </li>
                    <li> No player in the throwing or dodging team should step on or out of the marking circle. Dodging player will be considered out and foul would be given to the throwing team upon stepping on the circle. Players must make sure of it.</li>
                    <li>Those throwing team players who got out in the previous round can join back in the next round.</li>
                    <li>After every round, that is, when the whole team inside gets out, the time will be stopped and they’ll be given 15 seconds to return (time would be stopped for that duration). </li>
                    <li> Team with the minimum points (minimum number of players lost in the total match) will win. </li>
                    <li>If all players are out, then their time will be noted and the team with more time in the ring will win. </li>
                    <li>In case of any discrepancy the referee’s decision would be the final.</li>
                    </ul>
                    

                    <div className="sports-item-heading">
                        <h2>Guidelines that can be followed to ensure fair play in Hallabol :
                        </h2>
                    </div>
                    <ul className='guidlines'>
                        <li> No one can use abusive words while playing</li>
                        <li>All participants should be familiar with the tournament rules and regulations and should follow them at all times.</li>


                    </ul>





                

                <div className="sports-item-heading">
                    <h2>For any queries contact :</h2>
                </div>
                <ul className='guidlines'>
                                <li>
                                Dhruv jalan | Mob1
                             </li>
                                <li>                
                                    Ayush umare  | Mob2
                                </li>
                            </ul>
                <div className="register-button">
                    <Link to="/register?game=Dodge Ball">Register Now</Link>

                </div>

            </div>


        </div>
    )
}

export default Dodgeball
