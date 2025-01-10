import React, { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    gameselect: '',
    teamname: '',
    teamleader: '',
    teamleaderroll: '',
    teamleaderemail: '',
    teamleadercontact: '',
    members: [],
  });

  const gameMapping = {
    "Gully Cricket": 6,
    "Kho-Kho": 8,
    "Footsal": 7,
    "Tug of war": 6,
    "Foot-voley": 6,
    "4-a-side-baddy": 4,
    "seven stone": 6,
    "freesbe": 7,
    "throw ball": 6,
  };

  const [teamMembers, setTeamMembers] = useState([]);

  const handleGameChange = (e) => {
    const selectedGame = e.target.value;
    setFormData({ ...formData, gameselect: selectedGame });

    // Dynamically set team members based on the selected game
    const playerCount = gameMapping[selectedGame] || 0;
    const newMembers = Array.from({ length: playerCount - 1 }, (_, index) => ({
      name: '',
      rollNo: '',
      id: index + 2,
    }));
    setTeamMembers(newMembers);
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index][field] = value;
    setTeamMembers(updatedMembers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedMembers = teamMembers.flatMap((member) => [
      member.name,
      member.rollNo,
    ]);
  
    const finalData = {
      ...formData,
      members: formattedMembers,
    };
  
    console.log('Submitting data:', finalData); // Debugging line
  
    try {
      const response = await axios.post('http://localhost:5000/register', finalData);
      if (response.status === 200) {
        alert('Registration successful!');
        setFormData({
          gameselect: '',
          teamname: '',
          teamleader: '',
          teamleaderroll: '',
          teamleaderemail: '',
          teamleadercontact: '',
          members: [],
        });
        setTeamMembers([]);
      }
    } catch (err) {
      alert('Error saving data. Please try again later.');
    }
  };
  

  return (
    <div className="container mt-5 fade-in">
      <h2 className="text-center">Register for Hallabol Games</h2>
      <form className="needs-validation" onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="gameselect" className="form-label">Select Game</label>
          <select
            id="gameselect"
            name="gameselect"
            className="form-select"
            value={formData.gameselect}
            onChange={handleGameChange}
            required
          >
            <option value="" disabled>Select a game</option>
            {Object.keys(gameMapping).map((game) => (
              <option key={game} value={game}>{game}</option>
            ))}
          </select>
          <div className="invalid-feedback">Please select a game.</div>
        </div>

        {/* Other form fields */}
        {['teamname', 'teamleader', 'teamleaderroll', 'teamleaderemail', 'teamleadercontact'].map((field) => (
          <div key={field} className="mb-3">
            <label htmlFor={field} className="form-label">
              {field.split(/(?=[A-Z])/).join(' ')}
            </label>
            <input
              id={field}
              name={field}
              type={field === 'teamleaderemail' ? 'email' : field === 'teamleadercontact' ? 'tel' : 'text'}
              className="form-control"
              value={formData[field]}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
              required
            />
            <div className="invalid-feedback">Please provide a valid {field}.</div>
          </div>
        ))}

        {/* Team members */}
        <div id="team-members">
          {teamMembers.map((member, index) => (
            <div key={member.id}>
              <div className="mb-3">
                <label htmlFor={`member-name-${member.id}`} className="form-label">
                  Team Member {member.id} Name
                </label>
                <input
                  id={`member-name-${member.id}`}
                  name={`member-name-${member.id}`}
                  type="text"
                  className="form-control"
                  value={member.name}
                  onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                  required
                />
                <div className="invalid-feedback">Please provide a valid name.</div>
              </div>
              <div className="mb-3">
                <label htmlFor={`member-rollNo-${member.id}`} className="form-label">
                  Team Member {member.id} Roll No
                </label>
                <input
                  id={`member-rollNo-${member.id}`}
                  name={`member-rollNo-${member.id}`}
                  type="text"
                  className="form-control"
                  value={member.rollNo}
                  onChange={(e) => handleMemberChange(index, 'rollNo', e.target.value)}
                  required
                />
                <div className="invalid-feedback">Please provide a valid roll number.</div>
              </div>
            </div>
          ))}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;
