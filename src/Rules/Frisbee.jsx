import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Rules.css'

const Frisbee = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='main-container'>
            <div className="games-section">
                <div className="sports-heading">
                    <h1>Ultimate Frisbee</h1>
                </div>
                <div className="sports-item-heading">
                    <h2>Team Formation Rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li>The total number of players in each team will be 7 (6 players on-field + 1 substitute).</li>
                    <li>Each team should contain at least one female player.</li>
                    <li>The team should comprise of players from a minimum of two different batches on year basis. (eg, BTech ‘20, MTech ‘21, PhD ‘22).</li>
                    <li>Mixed teams can be formed. teams must note that there are scoring incentives given to encourage women participation.</li>
                    <li>Staff and faculty (non-pool players) can form their own teams without any batch restrictions.</li>
                    <li>A registered player can't play for more than one team.</li>


                </ul>
                <div className="sports-item-heading">
                    <h2>Game Rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li>If female player is absent and if the opposite team agrees, match can still be played with score starting from 1 0.</li>
                    <li>A coin toss decides which team starts the game in the offence or defense and the other team picks the endzone side.</li>
                    <li>Players from both teams must take their positions on the respective end zones.</li>
                    <li>At the start of the game, the defense takes possession of the Frisbee.</li>
                    <li>The defense pulls the Frisbee to the offense. Play begins when the offense catches the disc in the air, when the disc comes to rest, or - on point starts only - when the offense stops the disc after its first ground contact while it is rolling.</li>
                    <li>In case the offence player touches the disc before falling or is unable to catch, it is a turnover. (Turnover = Change in possession of disc)</li>
                    <li>When a team scores, they play defence on the next point and change sides.</li>
                    <li>Refree's decision will be the final decision.</li>
                    <li>On the first throw of the game or on a throw after any goal scored, a defense player cannot possess the Frisbee disc on first flight. Even if the Frisbee disc touches the ground, the offense gets the first possession.</li>
                    <li>The Frisbee can be passed in any direction.</li>
                    <li>A point is scored when an offense player in the goal zone catches any pass in the end zone of attack and retains possession of the disc without letting it touch the ground. The point will only be considered when the first point of contact is made inside the goal zone.</li>
                    <li>If the Frisbee disc goes beyond the borders on the field, it is considered an outside and the possession switches.</li>
                    <li>If a player drops the Frisbee disc, possession switches.</li>
                    <li>A defense player has to maintain a minimum distance equivalent to an arm's length from the offense player in possession of the Frisbee disc. If the defense player fails to do so, it will be considered a foul only when called. The offense player can push the defender back to the arms length using the disc only. Using any other means will be considered foul only when called.</li>
                    <li>An offense player is not allowed to run from the position where he/she caught the Frisbee disc and is still in possession of the Frisbee disc. If the offense player does so, it will be considered a foul and possession of the disc changes.</li>
                    <li>An Offense player has only 10 seconds to throw the disc (only when the nearby defence player counts). If the offense player fails to do so, possession will be exchanged. If a defense player during the defense doesn't clearly count 10 seconds then the offense player can hold the frisbee even longer than 10 seconds without committing a foul.</li>
                    <li>The offensive player can only move one leg while throwing the disc. The defense player can appeal if they feel the offense player is violating this rule. But still foul will only be given if the referee agrees to the appeal.</li>
                    <li>If a defense player taps the disc while it is in flight, the possession switches, and the defense becomes the offense and vice-versa.</li>
                    <li>If a defense player taps the disc while it is in the hands of an offensive player, it is a defensive foul and he must restart his count from 1.</li>
                    <li>If the disc falls inside the goal zone then offense and defense switches and restart will happen from outside the goal zone. If done from inside, it will be considered a warning and the offense player has to rethrow from outside the goal zone.</li>
                    <li>If a defense player gets physical with the offense player while he is trying to receive a pass from his teammate, the disc will be rethrown from the place from where the pass was given. A warning will be given to the defense player.</li>
                    <li>In case of any of the foul mentioned above, the possession switches immediately to the opposite team.</li>
                    <li>In case of a foul, for the restart to happen, the players should be at the same place as they were before the foul was given.</li>
                    <li>If a player commits 3 fouls, he/she is out of the game for the entire game.</li>

                </ul>



                <div className="sports-item-heading">
                    <h2>For any queries contact :</h2>
                </div>
                <ul className='guidlines'>
                                <li>
                                Pavitr Chandwani | 9313617196
                             </li>
                             <li>
                                Dhairya Bhatt | 9484866906
                             </li>
                            </ul>
                <div className="register-button">
                    <Link to="/register?game=Freesbe">Register Now</Link>

                </div>

            </div>


        </div>
    )
}

export default Frisbee
