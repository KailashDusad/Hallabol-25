import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Rules.css'

const Footsal = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='main-container'>
            <div className="games-section">
                <div className="sports-heading">
                    <h1>Futsal</h1>
                </div>
                <div className="sports-item-heading">
                    <h2>Team Formation Rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li>The referee has the final say in any kind of conflict or confusion during the game.
                    </li>
                    <li>Teams can consist of both male and female players.</li>
                    <li>A team will comprise 5 on-field players and 2 substitutes (A total of 7 per team).</li>
                    <li>A team should comprise players from a minimum of 2 different batches.</li>
                    <li>Staff and faculty (non-pool players) can form their own teams without any batch restrictions.</li>
                    <li>A team can consist of at most 2 pool players.</li>
                    <li>A team with 2 pool players is mandated to have at least one girl in their formation for at least one-half of the game.</li>

                    <li> An advantage of 2 goals will be given under one of the following stances:
                        <ul>
                            <li>If the team has at most one pool players and the girl must play for at least one half (without substitution in between).</li>

                            <li>If the team has two pool players then the girl must play for both the halves (without substitution in between).</li>
                        </ul>
                    </li>
                    <li>No player shall use their hand at any point during the game i.e. There must not be any goalkeeper in the team.</li>
                </ul>


                <div className="sports-item-heading">
                    <h2>Game Rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li>
                    There will be 2 halves of 8 minutes each, with a half-time break of 5 minutes in between but during quarter finals, there will be 2 halves of 10 minutes each, with a half-time break of 5 minutes.
                    </li>
                    <li>
                        When the ball hits the basket in the court, it will be considered as out.
                    </li>
                    <li>
                        Normal football rules are applicable with the exception of the off-side rule.
                    </li>
                    <li>
                        In case of outside, the team should start the play with a kick from the outside line.
                    </li>
                    {/* <li>
                        A player can score a goal only after entering the opposite team's half of the court.
                    </li> */}
                    <li>
                        A team committing a total of 3 fouls will be awarded a one-step penalty against them.
                    </li>
                    <li>
                        The penalty has to be a one-step penalty taken from the center of the court.
                    </li>
                    <li>
                        Any kind of disrespect to the game will be awarded a yellow card.

                    </li>
                    <li>A player awarded with a yellow card will have to be substituted for the next two minutes during the match.</li>
                    <li>
                        2 yellow cards in one game will result in a red card, meaning the player will sit out and the team will have to play with one player less for the rest of the match.
                    </li>
                    <li>
                        In case of a draw, any 3 of the members of the team will participate in a penalty shoot-out (One-step penalties).
                    </li>
                    <li>Rolling substitutions are allowed.
                    </li>
                    <li>There will not be any re-take for an incorrect one-step penalty.</li>
                    <li>All the team captains would be prior informed about the match and it would be the team’s duty to be present at the scheduled time. If the team fails to gather at the scheduled match timing, the referee has a right to give bye to the other team.</li>



                </ul>
                <div className="sports-item-heading">
                    <h2>Pool Players:</h2>
                </div>
                <ul className='guidlines'>
                    <li>Lobsang Kom, Kushal Rathod, Akash KP, Evan Keinz Joy, Swayam Koregave, Aayush More, Adwaith P, Anurag Vishal, Aflah, Prajas Kulkarni, Anshu Kale, Sumedh Wankhede, Jagroop Singh, Aboobacker, Vaibhav, Nirmay, Shernik, Aslam, Keshav.</li>
                    <li><span style={{color:"#F00"}}>*Note:</span> Any alumni who have previously been pool players will be considered pool players for this edition as well.</li>




                </ul>

                <div className="sports-item-heading">
                    <h2>For any queries contact :</h2>
                </div>
                <ul className='guidlines'>
                                <li>
                                Lobsang Kom | Mob1
                             </li>
                                <li>
                                Hriday Pandya | Mob2
                                </li>
                                <li>                  
                                Manas Arasada | Mob3
                                </li>
                            </ul>
                <div className="register-button">
                    <Link to="/register?game=Footsal">Register Now</Link>

                </div>
















            </div>


        </div>
    )
}

export default Footsal
