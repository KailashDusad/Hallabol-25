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
                    <li> Each team should contain at least one female player.</li>
                    <li>The team should comprise of players from a minimum of two different batches on year basis. (eg, BTech ‘20, MTech ‘21, PhD ‘22).</li>
                    <li>There should not be more than 5 players of the same batch.</li>
                    <li>Mixed teams can be formed. teams must note that there are scoring incentives given to
                        encourage women participation.</li>
                    <li> There is no limit on the total number of Inter IIT players in a team. However, the maximum number of Inter IIT players allowed at a time on the field are 2.</li>
                    <li>Inter-IIT players who have represented the institute in Table Tennis, Badminton, Chess and Swimming will not be subjected to the inter-IIT constraint.</li>
                    <li>Staff and faculty (non-pool players) can form their own teams without any batch restrictions.</li>
                    <li> A registered player can’t play for more than one team.</li>


                </ul>
                <div className="sports-item-heading">
                    <h2>Game Rules:</h2>
                </div>
                <ul className='guidlines'>

                    <li>A disc toss decides which team starts the game in the offence or defense and the other team picks the endzone side.</li>
                    <li>Players from both teams must take their positions on the respective end zones.</li>
                    <li>At the start of the game, the defense takes possession of the Frisbee.</li>
                    <li> The defense throws the Frisbee disc (pulls) to the offense and the game starts at the
                        point where the disc falls or the player catches the disc.</li>
                    <li>In case the offence player touches the disc before falling or is unable to catch, it is a
                        turnover. (Turnover = Change in possession of disc)</li>
                    <li>When a team scores, they play defence on the next point and change sides.</li>
                    <li> Refree’s decision will be final decision.</li>

                </ul>

                <div className="sports-item-heading">
                    <h2>Disc Passing Rules:</h2>
                </div>
                <ul className='guidlines'>

                    <li>On the first throw of the game or on a throw after any goal scored, a defense player cannot possess the Frisbee disc on first flight. Even if the Frisbee disc touches the ground, the offense gets the first possession.</li>
                    <li> The Frisbee can be passed in any direction.</li>
                    <li> If the Frisbee disc goes beyond the borders on the field, it is considered an outside and
                        the possession switches. If a player drops the Frisbee disc, possession switches.</li>
                    <li>A defense player has to maintain a minimum distance equivalent to an arm's length from the offense player in possession of the Frisbee disc. If the defense player fails to do so, it will be considered a foul.</li>
                    <li> An offensive player is not allowed to run from the position where he/she caught the Frisbee disc and is still in possession of the Frisbee disc. If the offense player does so, it will be considered a foul.</li>
                    <li> An Offense player has only 10 seconds to throw the disc. If the offense player fails to do so, possession will be exchanged.</li>
                    <li>If a defense player taps the disc while it is in flight, the possession switches, and the defense becomes the offense and vice-versa.</li>
                    <li> If a defense player taps the disc while it is in the hands of an offensive player, it is a defensive foul and he must restart his count from 1.</li>
                    <li> If a defense player during the defense doesn't clearly count 10 seconds then the offense player can hold the frisbee even longer than 10 seconds without committing a foul.</li>
                    <li>In case of any of the foul mentioned above, the possession switches immediately to the opposite team.</li>
                    <li> If a player commits 3 fouls, he/she is out of the game for the entire 30 minutes.</li>
                </ul>

                <div className="sports-item-heading">
                    <h2>For any queries contact :</h2>
                </div>
                <ul className='guidlines'>
                                <li>
                                Shivam Sudhakar Chavan | Mob1
                             </li>
                                <li>
                                    Aditya Mehta  | Mob2
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
