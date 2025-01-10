import React from 'react';
import manmohan from './manmohan.jpg'; 
import './Team.css';

const teamData = [
    { name: 'Dawood 💣', role: 'Incharge', image: manmohan },
    { name: 'John Doe', role: 'Coordinator', image: manmohan },
  ];
  
  const Team = () => (
    <section className="team-section">
      <h1>Meet Our Team</h1>
      <div className="team-cards">
        {teamData.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={`Team Member ${index + 1}`} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
  

export default Team;
