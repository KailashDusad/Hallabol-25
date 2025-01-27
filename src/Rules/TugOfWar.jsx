import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Rules.css';

const TugOfWar = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='main-container'>
            <div className="games-section">
                <div className="sports-heading">
                    <h1>Tug of War</h1>
                </div>
                <div className="sports-item-heading">
                    <h2>Pool Players: </h2>
                </div>
                <ul className='guidlines'>
                    <li>Amartya Tuljapurkar, Hemant Poonia, Rahul Ahirwar, Tushar Chahal, Praveen Bishnoi, Lovekesh Mahale, Ritesh kumar, Manmohan Singh, Srimaan Govindu, Saurabh Kumar</li>
                </ul>
                <div className="sports-item-heading">
                    <h2>Team Formation Rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li>The competition will be divided into Male and Female categories.</li>
                    <li>The team should consist of 6 players, of which 5 will be on-field players, and 1 will be a substitute player.</li>
                    <li>The team should have members from at least 2 different batches. (Staff and Faculty will be considered as different batches).</li>
                    <li>The team cannot have more than two pool players among the 6 registered members.</li>
                    <li>There is a weight restriction for each team; for the male category, the total weight of the on-field players cannot exceed 400kgs, and for the female category, the total weight of the on-field players cannot exceed 360kgs.</li>
                    <li>There will be a surprise element of the game, which will be disclosed before the game starts.</li>
                </ul>
                <div className="sports-item-heading">
                    <h2>Game Rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li>Two teams will participate in a match and hold the rope from two ends.</li>
                    <li>A total of 3 rounds of 2 minutes will be conducted to decide the winner. Each team will get a rest of 2 minutes only, between rounds.</li>
                    <li>In case we still don't have a winner at the end of 2 minutes, the round will be declared as a draw.</li>
                    <li>Death Round: In case of a draw at the end of all the rounds, a final death round will be conducted with no time limit to declare the winner.</li>
                    <li>The Final will consist of 5 rounds.</li>
                    <li>A toss will decide which end is allotted to which team.</li>
                    <li>Teams will have to change ends after every round.</li>
                    <li>A mark will be in the centre, and two lines equidistant from the centre will be marked on the ground for each end. The team that pulls the central mark beyond the line on its end will be declared the winner of that round.</li>
                    <li>Nothing that could be used as a grip should be present on the hands (chalk powder is allowed and will be provided).</li>
                    <li>The rope has to be pulled with the palms of the hands. Wrapping rope around the hand is not allowed.</li>
                    <li>Every participant has to be barefoot throughout the match.</li>
                    <li>Any team cannot make any substitutions throughout the match without the permission of the game coordinators. A substitution after the match has started will only be allowed in case of injury, which will be verified by the coordinator.</li>
                    <li>The referee's decision will be considered the final decision.</li>
                </ul>
                <div className="sports-item-heading">
                    <h2>General Guidelines:</h2>
                </div>
                <ul className='guidlines'>
                    <li>Teams are expected to arrive 10 minutes before their given match time.</li>
                    <li>Every team will be weighed before the match; if overweight, there will be consequences.</li>
                    <li>Any team with an offensive name will be asked to change its name; if the team disagrees, its registration will be terminated.</li>
                </ul>
                <div className="sports-item-heading">
                    <h2>For any queries contact:</h2>
                </div>
                <ul className='guidlines'>
                    <li>Kshitij Suresh Giri | 7990614365</li>
                    <li>Abhitej Singh Bhullar | 6280120714</li>
                </ul>
                <div className="register-button">
                    <Link to="/register?game=Tug of war">Register Now</Link>
                </div>
            </div>
        </div>
    );
};

export default TugOfWar;
