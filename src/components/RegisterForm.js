import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/RegisterForm.css';
import Alert from './Alert';
import { useLocation } from 'react-router-dom';

const RegisterForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  const [loading, setLoading] = useState(false);
  const [selectedGameRule, setSelectedGameRule] = useState('');
  const location = useLocation();
  const [formData, setFormData] = useState({
    gameselect: '',
    teamname: '',
    teamleader: '',
    teamleaderroll: '',
    teamleaderemail: '',
    teamleadercontact: '',
    hostelPlayerCounts: {
      'Aibaan': '0',
      'Beauki': '0',
      'Chimair': '0',
      'Duven': '0',
      'Emiet': '0',
      'Firpeal': '0',
      'Griwiksh': '0',
      'Hiqom': '0',
      'Ijokha': '0',
      'Jurqia': '0',
      'Kyzeel': '0',
      'Lekhaaq': '0',
    },
    members: [],
  });

  
  const gameMapping = {
    "Gully Cricket": 7,
    "Kho-Kho": 9,
    "Footsal": 7,
    "Tug of war": 6,
    "Foot-voley": 6,
    "4-a-side-baddy": 4,
    "Seven Stone": 6,
    "Freesbe": 7,
    "Throw Ball": 6,
    "Carrom": 2,
    "Dodge Ball": 6,
    "Chess": 3,
    "Basketball": 5,
  };

  const hostels = [
    "Aibaan",
    "Beauki",
    "Chimair",
    "Duven",
    "Emiet",
    "Firpeal",
    "Griwiksh",
    "Hiqom",
    "Ijokha",
    "Jurqia",
    "Kyzeel",
    "Lekhaaq",
  ];

  const [teamMembers, setTeamMembers] = useState([]);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const handleGameChange = (e) => {
    const selectedGame = e.target.value;
    setFormData(prevFormData => ({
      ...prevFormData,
      gameselect: selectedGame,
      hostelPlayerCounts: prevFormData.hostelPlayerCounts
    }));

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
    const allHostelsFilled = Object.values(formData.hostelPlayerCounts).every(count => count !== '');
    const totalHostelPlayers = Object.values(formData.hostelPlayerCounts).reduce((sum, count) => sum + parseInt(count || 0), 0);
    const requiredPlayers = gameMapping[formData.gameselect] || 0;
    
    if (!formData.gameselect || !formData.teamname || !formData.teamleader || !formData.teamleaderroll || !formData.teamleaderemail || !formData.teamleadercontact || !allHostelsFilled || teamMembers.some((member) => !member.name || !member.rollNo)) {
      // alert('Please fill all the fields.');
      showAlert('warning', 'Please fill all the required fields!');
      return;
    }

    if (totalHostelPlayers !== requiredPlayers) {
      showAlert('warning', `Total players from all hostels (${totalHostelPlayers}) must equal required players for ${formData.gameselect} (${requiredPlayers})!`);
      return;
    }
    setLoading(true);
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
          hostelPlayerCounts: {
            'Aibaan': '0',
            'Beauki': '0',
            'Chimair': '0',
            'Duven': '0',
            'Emiet': '0',
            'Firpeal': '0',
            'Griwiksh': '0',
            'Hiqom': '0',
            'Ijokha': '0',
            'Jurqia': '0',
            'Kyzeel': '0',
            'Lekhaaq': '0',
          },
          members: [],
        });
        setTeamMembers([]);
      }
    } catch (err) {
      // alert('Error saving data. Please try again later.');
      showAlert('error', 'Error saving data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const game = params.get('game');
    console.log('Game from URL:', game);
    if (game) {
        setSelectedGameRule(game);
        setFormData(prevFormData => ({ ...prevFormData, gameselect: game }));
        const playerCount = gameMapping[game] || 0;
        console.log('Player count:', playerCount);
        const newMembers = Array.from({ length: playerCount - 1 }, (_, index) => ({
          name: '',
          rollNo: '',
          id: index + 2,
        }));
        console.log('New team members:', newMembers);
        setTeamMembers(newMembers);
    }
}, [location]);

  

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

        <div className="mb-4">
          <h5 className="mb-3">Number of Players from Each Hostel</h5>
          <div className="row">
            {hostels.map((hostel) => (
              <div key={hostel} className="col-md-6 mb-3">
                <label htmlFor={`hostel-${hostel}`} className="form-label">{hostel}</label>
                <input
                  id={`hostel-${hostel}`}
                  name={`hostel-${hostel}`}
                  type="number"
                  min="0"
                  className="form-control"
                  value={formData.hostelPlayerCounts[hostel]}
                  onChange={(e) => setFormData({
                    ...formData,
                    hostelPlayerCounts: {
                      ...formData.hostelPlayerCounts,
                      [hostel]: e.target.value
                    }
                  })}
                  required
                />
              </div>
            ))}
          </div>
        </div>

        {loading ? (
          <>
          <div className="spinner-border" style={{color:'#ff7f50'}} role="status">
            <span className="sr-only" ></span>
          </div>
          </>
        ) : (
          <button type="submit" className="btn btn-primary">Submit</button>
        )}
        {/* <button type="submit" className="btn btn-primary">Submit</button> */}
      </form>
    </div>
  );
};

export default RegisterForm;
