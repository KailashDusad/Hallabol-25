import React, { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css';
import Alert from './Alert';
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
    "carrom": 4,
    "dodge ball": 6,
    "chess": 2
  };

  const [teamMembers, setTeamMembers] = useState([]);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

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

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => setAlert({ show: false, type: '', message: '' }), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.gameselect || !formData.teamname || !formData.teamleader || !formData.teamleaderroll || !formData.teamleaderemail || !formData.teamleadercontact || teamMembers.some((member) => !member.name || !member.rollNo)) {
      // alert('Please fill all the fields.');
      showAlert('warning', 'Please fill all the required fields!');
      return;
    }
    const formattedMembers = teamMembers.flatMap((member) => [
      member.name,
      member.rollNo,
    ]);
  
    const finalData = {
      ...formData,
      members: formattedMembers,
    };
  
  
    try {
      // const response = await axios.post('http://localhost:5000/register', finalData);
      const response = await axios.post('https://hallabol-25.vercel.app/register', finalData);
      if (response.status === 200) {
        // alert('Registration successful!');
        showAlert('success', 'Registration successful!');
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
      // alert('Error saving data. Please try again later.');
      showAlert('error', 'Error saving data. Please try again later.');
    }
  };
  

  return (
    <div className="container mt-5 fade-in">
      {alert.show && <Alert type={alert.type} message={alert.message} onClose={() => setAlert({ show: false })} />}
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

          {['teamname', 'teamleader', 'teamleaderroll', 'teamleaderemail', 'teamleadercontact'].map((field) => (
            <div key={field} className="mb-3">
              <label htmlFor={field} className="form-label">
                {field.replace(/([a-z])([A-Z])/g, '$1 $2').replace('teamname', 'Team Name ').replace('teamleader', 'Team Leader ').replace('roll', 'Roll No').replace('email', 'Email').replace('contact', 'Contact')}
                {/* {field.replace(/([a-z])([A-Z])/g, '$1 $2').replace('teamleader', 'Team Leader ')} */}
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
