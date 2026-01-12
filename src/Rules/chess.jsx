import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Rules.css'

const Chess = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='main-container'>
            <div className="games-section">
                <div className="sports-heading">
                    <h1>TriUnity Chess</h1>
                </div>
                <div className="sports-item-heading">
                    <h2>Rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li>Each team consists of three players. Teams may include any combination of male and female players. A team cannot include more than one marquee player.</li>
                    <li>A single substitute is permitted but must be registered in advance, if applicable.</li>
                    <li>Players within a team must take turns making moves. The order of play must be decided and submitted before the start of the game and cannot be altered once the game begins.</li>
                    <li>The standard time control is 5 minutes per side with a 5-second increment per move (5+5). If a female player is on the team, the time control becomes 7+5. If a marquee player is on the team, the time control becomes 4+5.</li>
                    <li>Players are responsible for managing their own time. The clock starts when the first player makes their move.</li>
                    <li>If a player makes an illegal move:
                        <ul>
                            <li>First illegal move: A warning is issued to the team.</li>
                            <li>Second illegal move: One additional minute is added to the opposing team’s clock.</li>
                            <li>Third illegal move: The team forfeits the game.</li>
                        </ul>
                    </li>
                    <li>Players are prohibited from consulting with teammates once the game begins. Only the current player is allowed to make moves.</li>
                    <li>Players must adhere to the predetermined order of play. Deviations from the order without mutual consent may result in penalties.</li>
                    <li>The game concludes when one side is checkmated, resigns, or runs out of time.</li>
                    <li>Standard FIDE rules apply to all games unless otherwise stated.</li>
                    <li>Decisions made by the organizers are final and binding.</li>
                </ul>

                <div className="sports-item-heading">
                    <h2>Marquee Players:</h2>
                </div>
                <ul className='guidlines'>
                    <li>Aadi Modi, Abhishek Sahasranshu, Abhishek Tagalpallewar, Akash Gupta, Akash Sahoo, Animesh Sharma, Arham Gandhi, Arindam Mitra, Ashmit Chhoker, Chaitanya Chaudhary, Chaman Modi, Devvrat Hans, Kshitij Kasodkar, Neev Patel, Nishant Tomar, Pragya Arora, Rudraksh Verma, Sameer Verma, Shreyas Purkar, Soham Pathak, Srivaths, Subhranil Majumder, Suraj Borate, Swayam Bhatt, Swayam Koregave, Tarun Hooda, Tejas Joshi</li>
                    <li><span style={{color:"#F00"}}>*Note:</span> Any alumni who have previously been pool players will be considered pool players for this edition as well.</li>
                </ul>

                <div className="sports-item-heading">
                    <h2>Contact:</h2>
                </div>
                <ul className='guidlines'>
                    <li>
                        Neev Bharatkumar Patel  | 6353166733
                        </li>
                        <li>
                        Arindam  | 6290538788
                        </li>
                </ul>

                <div className="register-button">
                    <Link to="/register?game=Chess">Register Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Chess;
