import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Rules.css'

const GullyCricket = () => {
    return (
        <div className='main-container'>
            <Helmet>
                <title>Gully-Cricket</title>
            </Helmet>
            <div className="games-section">
                <div className="sports-heading">
                    <h1>Gully-Cricket</h1>
                </div>
                <div className="sports-item-heading">
                    <h2>Pool Players: </h2>
                </div>
                <ul className='guidlines'>
                    <li>Pool Players...</li>
                </ul>
                <div className="sports-item-heading">
                    <h2>Team Formation Rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li>Each team must have 7 players, of which 6 would play in the match.</li>
                    <li>The team should comprise players from a minimum of 2 different batches. (eg:BTech ‘19, M.Tech20). Faculties and staff can be considered as one batch.</li>
                    <li>At max, 2 pool players (Inter-IIT players) are allowed in a team.</li>
                    <li>A team must consist of at least one girl.</li>
                    <li>The extra player will act as a super-sub; the player can bat or ball during the
                        match.</li>
                    <li>*Note that at least one girl player must remain on the field during the game.</li>





                </ul>
                

                <div className="sports-item-heading">
                    <h2>Game Rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li>Each inning would be 5 overs.</li>
                    <li>Maximum 1 players can bowl 2 overs. A girl must bowl at least 1 over.</li>
                    <li>In the girl’s over, the bowling team can dismiss the batsman by catching the ball on one bounce and in one hand.</li>
                    <li>The total number of runs scored by a girl will be doubled. Also, when a girl is
                        batting, and the ball touches the bat, provided that it is a dot ball, then one run will be added to the total. All other rules regarding runs will be announced before the match.</li>
                    <li>Hallabol over <span style={{color:"#F00"}}>*Surprise*</span> (it’s not what you think it is).</li>
                    <li>All the usual international rules like wide, no balls are ON.</li>
                    <li>A player can be declared ‘retired hurt’ only after completing an over. However,
                        retired players can bat again only after every remaining player gets out.</li>
                    <li>Only throw bowling (with at max one-step run-up) will be allowed with speed
                        restriction, which will be looked after by the Umpire only.</li>
                    <li>All the other rules will be announced to both teams before the match starts.</li>
                    <li>The umpire's decision would be considered final in case of any discrepancy.</li>
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

export default GullyCricket
