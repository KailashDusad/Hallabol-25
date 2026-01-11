import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Rules.css'

const Basketball = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='main-container'>
            <div className="games-section">
                <div className="sports-heading">
                    <h1>Basketball 3v3</h1>
                </div>
                <div className="sports-item-heading">
                    <h2>Team Formation Rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li>NOTE – All basketball inter-IIT players (2025) will be considered as pool players.</li>
                    <li>Each team will consist of 5 players (3 on court + 2 substitutes).</li>
                    <li>The team should comprise of players from at least two different batches.</li>
                    <li>The team will comprise of both male and female players.</li>
                    <li>Out of 5 players at least one is supposed to be a female player (who has to play at least one half). If a team does not have a female player, their opponent will be given an advantage of 5 points provided the female player plays a full half without being substituted.</li>
                    <li>A team can have at max 2 pool players. If a team has two pool players, one out of the two pool players is supposed to be a female pool player (2 boys pool players cannot be in the same team; however, 2 female pool players are allowed to be in the same team).</li>
                    <li>Staff and faculty can form their team without any restrictions.</li>
                </ul>

                <div className="sports-item-heading">
                    <h2>Game Rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li>The Referee's decision will be final.</li>
                    <li>The game will be played with a standard size 7 ball.</li>
                    <li>There will be two halves of 5 minutes each with 2 minutes of break in between.</li>
                    <li>No time-out is allowed; an official time-out can be taken in case of injury or technical reason.</li>
                    <li>Normal FIBA rules of basketball apply.</li>
                    <li>The game will be played on half-court (one ring). At a time, three players from each team will play, and two will be substitutes. A team can substitute only during a dead ball or free throw.</li>
                    <li>During the play, players can wear normal shoes only; no spikes are allowed. For the safety of players, wearing shoes is highly encouraged.</li>
                    <li>The game is of 21 points or 10 minutes, whichever happens first. If 10 minutes are over, the team with more points wins. If the score is tied at the end of 10 minutes, extra time of 2 minutes will be provided, and the team that first scores 3 additional points will win.</li>
                    <li>The scoring will be of 1 or 2 points instead of 2 or 3 as in regular basketball. A successful basket from inside the 3-point line will be awarded 1 point and outside the line will be awarded 2 points. Every free throw will be awarded 1 point. (NOTE: This will be same for the pool girls player).</li>
                    <li>If a female player scores a basket from inside the 3-point line, the team will be awarded 2 points. If she scores from outside the line, the team will be awarded 3 points as in a regular basketball game. (NOTE: this is only for girls non-pool player)</li>
                    <li>The first possession of the game will be decided by coin flip or stone-paper-scissor.</li>
                    <li>The game will be played in continuous mode only; however, once the possession is changed from Team 1 to Team 2, the defensive team needs to clear the ball by going outside the 3-point line.</li>
                    <li>Possession clearance can be made by directly passing the ball outside the 3-point line or by touching the 3-point line by any body part while keeping the ball dribble on.</li>
                    <li>The defensive team can gain possession by stealing the ball from the offensive team or after the offensive team scores.</li>
                    <li>A player from a non-scoring team shall resume the game by dribbling or passing the ball from inside the court directly underneath the basket (not from behind the end line) to a place on the court behind the 3-point line.</li>
                    <li>The defensive player is not allowed to play for the ball in the no-charge semi-circle area underneath the basket.</li>
                    <li>In no circumstance are players supposed to inbound the ball. If the ball goes outside, it will start again from the centre by checking the ball.</li>
                </ul>

                <div className="sports-item-heading">
                    <h2>Foul Rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li>If a foul is committed on a player during shooting or layup, the following rules apply:
                        <ul>
                            <li>If the player has made a successful attempt from inside the 3-point line, the player gets 1 free throw irrespective of basket count or not (2 for female players).</li>
                            <li>If the player has made a successful attempt from outside the 3-point line, the player gets 1 free throw. If the shot is unsuccessful, the player will get 2 free throws (3 for female players).</li>
                            <li>After the 6th team foul, 2 free throws will be awarded for every foul.</li>
                        </ul>
                    </li>
                    <li>A team can have 6 fouls in total before entering the free-throw situation. After 6 team fouls, the opponent team will get 2 free throws for every foul committed.</li>
                </ul>

                <div className="sports-item-heading">
                    <h2>Pool Players:</h2>
                </div>
                <ul className='guidlines'>
                    <li>Aditya Kumar, Siddharth Verma, Gulshan Kumar, Atharv Dapse, Divyanshu, Hemcharan Varma, Kowel P, Ayush Alhat, Ankit joshi, Yash choudhary, Yuvraj, Abhinav, Gayatri Priyadarsini, Harshita Singh, Siya Patil, Prerna Sawane, Ankita Mohanpuriya, Raima Rao, Bhoomi.</li>
                </ul>
                <div className="sports-item-heading">
                    <h2>For any queries contact :</h2>
                </div>
                <ul className='guidlines'>
                    <li>
                    Harshita Singh | 6355766157
                    </li>
                    <li>
                    Siddharth verma | 9026879346
                    </li>
                </ul>

                <div className="register-button">
                    <Link to="/register?game=Basketball">Register Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Basketball;
