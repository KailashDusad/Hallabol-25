import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Rules.css'

const SevenStones = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='main-container'>
            <Helmet>
                <title>Seven Stones</title>
            </Helmet>
            <div className="games-section">
                <div className="sports-heading">
                    <h1>Seven Stones</h1>
                </div>
                <div className="sports-item-heading">
                    <h2>Team Formation Rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li>A team will comprise 5 on-field players and 1 substitute (A total of 6 per team).
                    </li><li>Teams can consist of both male and female players.
                    </li><li>There should be players from at least two different batches in a team. Faculty will be considered as different batches.
                    </li><li>Staff and faculty can form their own teams without any batch restrictions.
                    </li><li>In case of any injury/absence of a player, you may be allowed to play with unregistered players as per the referee’s decision.
                    </li>
                </ul>
                <div className="sports-item-heading">
                    <h2>Game Rules:</h2>
                </div>
                <ul className='guidlines'>

                    <li>Team A - Attacking Team, and Team B - Defending Team.</li>
                    <li>Maximum 5 chances of throwing (girls have 7 chances).</li>
                    <li>Catching team players can only catch with one hand (girls can use both hands).</li>
                    <li>The catcher should change with each throw.</li>
                    <li>Once, team A destroys the pile of stones, A will try to rearrange the stones within 90 seconds. B will
                        try to stop them from doing so by trying to hit players of team A below their Waist.</li>
                    <li> At a time, only one player of Team A is allowed in the inner circle for the rearrangement of stones, and a maximum of 3 players of Team B are allowed in the square but outside
                        the circle.</li>
                    <li>Team B has to out 2 players (3 in case of at least one girl in team A)  to gain 2
                        points before the arrangements of the stones by the opposite team. No Points will be awarded to team B if they out only one player.</li><li> If time runs out without arranging the stone, Team B gets 1 point.</li>
                    <li> After the rearrangement of stones, the player of Team A should shout ‘SATOLIYA’ loud and clear while tracing a circle around the pile; then, it gets 2 points. If a player of Team
                        A shouts ‘SATOLIYA’ without completing the pile in any way, Team B scores one point.</li>
                    <li>After three turns of each team, the team with more cumulative points will be declared the
                        winner.</li>
                    <li>In case of a tie, the winner will be decided by a bowl out (The team will be awarded a
                        point if and only if they knock out at least one stone. The point will not be considered if
                        the opponent catches the ball after hitting the stone).</li>
                    <li> The whole team is considered out if the opponent catches the ball that hits the stones (at
                        least one stone should fall out), and the catching team gets 1 point.</li>
                    <li> No player from the defending team (Team B) can touch or make contact with any of the
                        seven stones. (In case of any discrepancy, the Referee's decision will be final).</li>

                    <li> The players from team A are allowed to slide the stones on the ground but must not throw them in the air, although they are allowed to carry the stones with them while running.</li>
                    <li>Underarm throwing is not allowed.</li>
                    <li> Breaking any of the rules will be counted as a foul.</li>
                    <li> The referee's decision will be the final.</li>




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
                    <Link to="/register?game=Seven Stone">Register Now</Link>

                </div>

            </div>


        </div>
    )
}

export default SevenStones
