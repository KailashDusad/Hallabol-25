import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './Rules.css'

const KhoKho = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <div className='main-container'>
        <Helmet>
                <title>Kho-Kho</title>
            </Helmet>
            <div className="games-section">
                <div className="sports-heading">
                    <h1>Kho-Kho</h1>
                </div>
                <div className="sports-item-heading">
                    <h2>Team Formation Rules:</h2>
                </div>
                <ul className='guidlines'>
                <li>The total number of players in each team will be 8.The number of substitutes can be 1 or 2.</li>
                <li>Each team should contain at least one female player.</li>
                <li>The team should comprise of players from a minimum of two different batches on year basis. (eg, BTech ‘20, MTech ‘21, PhD ‘22).</li>
                <li>There should not be more than 5 players of the same batch.</li> <li> A registered player can only play for one team.</li>

                </ul>
                <div className="sports-item-heading">
                    <h2>Game Rules:</h2>
                </div>
                <ul className='guidlines'>
                <li>General Kho-Kho rules are applicable.</li>
                <li> Each match will consist of two innings of 8 minutes each (4 min chasing + 4 min
running (being chased)) for the first 2 rounds of the tournament and 10 minutes each (5 min chasing + 5 min running) for the subsequent rounds. Therefore, the total time per match will be (8+8+10) 26 minutes.</li>
<li>The substitute player must play at least one inning (out of 3 innings). </li><li> In case of two or more female players in the team (on-field), the team has to run for 1 min less than the mentioned time. In the case of chasing, if there are more than two females on the field, the opponent team has to run 1 min more. This rule won’t apply if both teams have the same number of female players on the field.</li>
<li> Teams where all members are female get a benefit of 4 minutes in case they are playing against a mixed or male team. They run for 8 min and chase a 12 min team in all the rounds.</li>


                </ul>
                <div className="sports-item-heading">
                    <h2>General Kho-Kho rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li>
                    All basic Kho-Kho rules are applicable.
                    </li>
                    <li>
                    Running team shall play in 3-2-2 (7 players) sequence on the field.
                    </li>
                    <li>
                    6 players of the chasing team take a knee-down position on squares that are drawn through field lines between two poles. One player stands near one pole to chase the runners first.
                    </li>
                    <li>
                     When the Attacker, while going in a particular direction, turns his shoulder line through more than a right angle to the direction which he has already taken it shall be a Foul.
                    </li>
                    <li>
                    If a Defender is put out as a result of such a Foul or if Foul is committed immediately as a result of the action taken in putting a defender out, the Defender shall not be declared out.

                    </li>
                    <li>
                    If you commit a foul in any of the regions between the last lane of the attacker and the end line, you cannot complete the foul by touching the pole corresponding to the region, you have to either make two consecutive Khos or touch the pole at the opposite end.

                    </li>
                    <li>
                    The Attacker who has put out the third (and last) defender shall not chase the new batch. He must give Kho. If he chases any of the new Defenders, it shall be a Foul.
                        
                    </li>
                    <li>
                    For chasing turns at any time during the match. The substituted attacker shall not pursue the defenders directly. He must give a Kho.
                        
                    </li>
                    <li>
                    If the runner’s even a small portion of the body is inside the field, then he/she will not be out.



                        
                    </li>
                    <li>
                    During a turn, an Attacker may go out of court but he shall observe all the rules about taking a direction and receding. The attacker will be allowed to enter the Field/Court as he wants if he goes out of Court beyond the extended post line. He cannot enter through the Free Zone.
                        
                    </li>
                    <li>
                    Each side shall enter its Runners simultaneously to the field from the portion marked for them in the lobby (Entry Zone).
                        
                    </li>
                    <li>
                    If an Attacker while chasing crosses/touches that line of the Central Lane which lies on the side of his chasing half the Foul shall not be declared. However, if an Attacker while touching or at the time of touching the Defender or as a result of the action of putting out a Defender, foul shall be declared and Defender will not be declared out.
                    </li>
                    <li>
                    After giving a perfect Kho if the Chaser while sitting loses the contact of the Cross Lane it shall not be a Foul.
                        
                        </li>

                </ul>
                <p className='para-guidlines'>
                Umpires: They supervise the game in their respective halves, divided by the centre line. A foul is indicated by continuous short whistles till the foul is corrected. An "out" is declared by a short whistle.

                </p>
                <p className='para-guidlines'>
                Referee: The referee helps the umpires and gives the final decision in case of any difference between them.

                </p>
                <p className='para-guidlines'>
                Time-keeper: He keeps the record of time and hands it over to the scorer at the end of an innings. He starts the turn by blowing a whistle: one long and one short. The end of the turn is indicated by a long whistle.

                </p>
                <div className="sports-item-heading">
                    <h2> These rules are going to be implemented from Semi-final:</h2>
                </div>
                <ul className='guidlines'>
                    
                    <li>
                    Time to enter the Field (TWO CORRECT KHOS) is given to Runner. Hence the defender who is inside the field can only be chased after at least one correct Kho is given.
                    </li>
                    <li>
                    The referee shall have the option to declare out runners of the next batch, who have not entered the field after the two correct Kho’s are given.
                    </li>
                    <li>
                    The Runners will continue to enter the field in the same batch till the end of turn. A referee, two umpires, a timekeeper and one scorer.

                    </li>

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
                <Link to="/register?game=Kho-Kho">Register Now</Link>

                </div>

            </div>


        </div>
  )
}

export default KhoKho
