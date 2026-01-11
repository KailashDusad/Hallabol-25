import React from 'react';
import './styles/Team.css';
import Sobania from '../Team/Sobania.jpg';
import kd from '../Team/kd1.jpg';
import abhitej from '../Team/abhitej.jpg';
import akash from '../Team/akash.jpg';
import animesh from '../Team/animesh.jpg';
import antariksh from '../Team/antariksh.jpg';
import hriday from '../Team/hriday.jpg';
import kp from '../Team/kp.jpg';
import kshitij from '../Team/kshitij.jpg';
import kunal from '../Team/kunal.jpg';
import Rohit from '../Team/rohit.jpg';
 




const teamData = [
    { name: 'Keshav Sobania', role: 'Sports secy', image: Sobania, contact:'+91 7240638176' },
    
    { name: 'Animesh Sharma', role: 'Convener', image: animesh, contact:'+91 9691330551' },
    { name: 'Antariksh Dongre', role: 'Convener', image: antariksh, contact:'+91 9173606682' },
    { name: 'Rohit Kumar Ram', role: 'Convener', image: Rohit, contact:'+91 6202626002' },

    { name: 'Kailash Dusad', role: 'Tech Coordinator', image: kd, contact:'+91 9116768618' },
    
    { name: 'Abhitej Singh Bhullar', role: 'Core', image: abhitej, contact:'+91 6280120714' },
    { name: 'Akash Gupta', role: 'Core', image: akash, contact:'+91 8881254922' },
    { name: 'Hriday Pandya', role: 'Core', image: hriday, contact:'+91 9512061845' },
    { name: 'Akash K P', role: 'Core', image: kp, contact:'+91 9694177555' },
    { name: 'Kshitij Giri', role: 'Core', image: kshitij, contact:'+91 7990614365' },
    { name: 'Kunal Dhamapurkar', role: 'Core', image: kunal, contact:'+91 8010255973' },

];

const Team = () => (
    <section className="team-section">
        <h1>Meet Our Team</h1>
        <div className="team-cards">
            {teamData.map((member, index) => (
                <div className="team-card" key={index}>
                    <div className="team-card-image fade-shadow">
                        <img src={member.image} alt={`Team Member ${index + 1}`} />
                    </div>
                    <div className="team-card-content">
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                        <p>{member.contact}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Team;
