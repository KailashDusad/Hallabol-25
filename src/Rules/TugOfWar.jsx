import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Rules.css'

const TugOfWar = () => {
    return (
        <div className='main-container'>
            <Helmet>
                <title>Tug of War</title>
            </Helmet>
            <div className="games-section">
                <div className="sports-heading">
                    <h1>Tug of War</h1>
                </div>
                <div className="sports-item-heading">
                    <h2>Team Formation Rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li>The competition will be divided into Male and Female categories.
                    </li><li>The team should consist of 6 players, of which 5 will be on-field players, and 1 will be a
substitute player

                    </li><li>The team should have members from at least 2 different batches. (Staff and Faculty will
be considered as different batches).


                    </li><li>There is a weight restriction for each team; for the male category, the total weight of the
on-field players cannot exceed 380kgs, and for the female category, the total weight of the
on-field players cannot exceed 350kgs.


                    </li>
                    <li>
                    There will be a surprise element of the game, which will be disclosed before the game
starts.

                    </li>

                    <li>
                        There will be a surprise element to the game which will be disclosed before the game. (Hint: One team member needs to be able to lead the group to victory).

                    </li>

                </ul>
                <div className="sports-item-heading">
                    <h2>Game Rules:</h2>
                </div>
                <ul className='guidlines'>
                    {/* <li>Two teams will participate in a match and will be holding rope from two ends.</li> */}
                    <li>Two teams will participate in a match and hold the rope from two ends</li>
                    <li>A total of 3 rounds will be conducted to decide the winner. The Final will consist of 5
rounds.</li>
                    <li>A toss will decide which end is allotted to which team.</li>
                    <li>Teams will have to change ends after every round.</li>
                    <li>A mark will be in the centre, and two lines equidistant from the centre will be marked on
the ground for each end. The team that pulls the central mark beyond the line on its end
will be declared the winner of that round.
</li>
                    <li>Nothing that could be used as a grip should be present on the hands (chalk powder is also
not allowed)</li>
                    <li>The rope has to be pulled with the palms of the hands. Wrapping rope around the hand
is not allowed.</li>
                    <li>Every participant has to be barefoot throughout the match.</li>
                    <li>The referee's decision will be considered the final decision.</li>


                </ul>

                <div className="sports-item-heading">
                    <h2>GENERAL GUIDELINES:
                    </h2>
                </div>
                <ul className='guidlines'>
                    <li>Teams are expected to arrive before their given match time.

                    </li>
                    <li>Every team will be weighed before the match, if overweight, there will be consequences.</li>
                    <li>Any team with an offensive name will be asked to change its name; if the team disagrees,
its registration will be terminated.</li>


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
                    <Link to="/register">Register Now</Link>

                </div>

            </div>


        </div>
    )
}

export default TugOfWar