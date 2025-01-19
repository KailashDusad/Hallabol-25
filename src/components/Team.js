import React from 'react';
import manmohan from './manmohan.jpg'; 
import './styles/Team.css';

const teamData = [
    { name: 'Dawood 💣', role: 'Convenor', image: manmohan },
    { name: 'Dawood 💣', role: 'Core Member', image: manmohan },
    { name: 'Dawood 💣', role: 'Core', image: manmohan },
    { name: 'Dawood 💣', role: 'Core', image: manmohan },
    { name: 'Dawood 💣', role: 'Core', image: manmohan },
    { name: 'Dawood 💣', role: 'Core', image: manmohan },
    { name: 'Dawood 💣', role: 'Core', image: manmohan },
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
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default Team;
