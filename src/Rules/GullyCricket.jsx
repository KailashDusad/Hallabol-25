import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Rules.css';

const GullyCricket = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='main-container'>
            <div className="games-section">
                <div className="sports-heading">
                    <h1>Gully-Cricket</h1>
                </div>
                <div className="sports-item-heading">
                    <h2>Pool Players: </h2>
                </div>
                <ul className='guidlines'>
                    <li>Jatin Nama, Sakib Ahmed Dar, Bhushan Kape, Dhairya Shah, Hansin Shah, Ayush Abhi, Faizan Bhatt, Raushan Thakur, Ankit Kumar, Aditya Jain, Arpit Sigotiya, Digvijay Singh Parihar, Bhavesh Joshi, Namesh Nishad, Nitesh Nayak, Nitesh Rathod, Shubh Tripathy, Shrawan Kumar, Vaibhav Mishra, Rahul Pandey </li>
                </ul>

                <div className="sports-item-heading">
                    <h2>Other Pool Players: </h2>
                </div>
                <ul className='guidlines'>
                    <li>Aaqib Khan, Aman Singh, Jaideep Singh Barad, Abhinav Singh Yadav, Pushkar Parakh, Dutt Parmar, Jaikishan Kumavat</li>
                </ul>

                <div className="sports-item-heading">
                    <h2>Staff Pool Players: </h2>
                </div>
                <ul className='guidlines'>
                    <li>Ratnesh Singh, Abhijit Mishra, Madhu Vadali, Santosh Raut, Santosh Joshi, Rohit Chaudhary, Rajib Kumar Das, Sachin Patel, Naran Pindoriya, Babloo Sharma, Nirav Prajapati</li>
                </ul>

                <div className="sports-item-heading">
                    <h2>Team Formation Rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li>Each team must have 7 players, of which 6 would play in the match.</li>
                    <li>The team should comprise players from at least two different batches (e.g., BTech'23, BTech'24 or BTech'23, MTech'23).</li>
                    <li>Faculties and Staff should be considered as one batch.</li>
                    <li>At max, 2 pool players (Inter-IIT players) are allowed in a team.</li>
                    <li>A team must consist of at least one girl.</li>
                    <li>The extra player will act as a super-sub; the player can bat or ball during the match.</li>
                    <li>Note that at least one girl player must remain on the field during the game.</li>
                </ul>

                <div className="sports-item-heading">
                    <h2>Game Rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li>Each inning would be 5 overs.</li>
                    <li>Maximum 1 player can bowl 2 overs. A girl must bowl at least 1 over.</li>
                    <li>In the girl’s over, the bowling team can dismiss the batsman by catching the ball on one bounce and in one hand (One tip-One hand is out in this case).</li>
                    <li>The total number of runs scored by a girl will be doubled.</li>
                    <li>Also, when a girl is batting, and the ball touches the bat, provided that it is a dot ball, then one run will be added to the total. All other rules regarding runs will be announced before the match.</li>
                    <li>Hallabol Over Surprise (To be told to you before the match starts).</li>
                    <li>All the usual international rules like wide, no balls are ON.</li>
                    <li>A player can be declared ‘retired hurt’ only after completing an over. However, retired players can bat again only after every remaining player gets out.</li>
                    <li>Only throw bowling (with at max one-step run-up) will be allowed with speed restriction, which will be looked after by the Umpire only.</li>
                    <li>All the other rules will be announced to both teams before the match starts.</li>
                    <li>The umpire's decision would be considered final in case of any discrepancy. Any unwanted argument with the umpire can result in a 5-run penalty to the arguing team. If the argument is large enough, the team may get disqualified.</li>
                    <li>If a team does not reach the venue on time, the other team should be given a bye automatically. A 10-minute buffer time would be given to the teams before giving a bye to the other team.</li>
                </ul>

                <div className="sports-item-heading">
                    <h2>For any queries contact :</h2>
                </div>
                <ul className='guidlines'>
                    <li>
                        Dutt Parmar	|	8160538184
                    </li>
                    <li>
                        Vinit Parmar | 9558923855
                        </li>
                        <li>
                        Ayush Abhi | 9835815150
                        </li>
                        <li>
                        Jayraj Vanza | 6353127793
                        </li>
                </ul>
                <div className="register-button">
                    <Link to="/register?game=Gully Cricket">Register Now</Link>
                </div>
            </div>
        </div>
    );
};

export default GullyCricket;
