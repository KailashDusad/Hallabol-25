import React from 'react';
import './styles/Team.css';
import Kushal from '../Team/Kushal.jpg';
import Adit from '../Team/Adit.jpg';
import Anurag from '../Team/Anurag.jpg';
import Rohit from '../Team/Rohit.png';
import Sobania from '../Team/Sobania.jpg';
import kd from '../Team/kd1.jpg';
import om from '../Team/om.jpg';
import sut from '../Team/sut.jpg';


const teamData = [
    { name: 'Adit Rambhia', role: 'Convener', image: Adit, contact:'+91 8850270294' },
    { name: 'Anurag Vishal', role: 'Convener', image: Anurag, contact:'+91 7738957332' },
    { name: 'Suteekshna Mishra', role: 'Convener', image: sut, contact:'+91 9044412185' },
    { name: 'Keshav Sobania', role: 'Core Member', image: Sobania, contact:'+91 7240638176' },
    { name: 'Kailash Dusad', role: 'Tech Coordinator', image: kd, contact:'+91 9116768618' },
    { name: 'Omkar R Prabhu', role: 'Core Member', image: om, contact:'+91 8310831731' },
    { name: 'Rohit Kumar Ram', role: 'Core Member', image: Rohit, contact:'+91 6202626002' },
    { name: 'Kushal Rathod', role: 'Core Member', image: Kushal, contact:'+91 9081599901' },
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
