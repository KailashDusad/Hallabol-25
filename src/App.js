import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Games from './components/Games';
import RegisterForm from './components/RegisterForm';
import Team from './components/Team';
import Table from './components/Table';
import Rules from './components/Rules';
import './styles.css';

const App = () => {
  const [selectedGame, setSelectedGame] = useState('');

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games setSelectedGame={setSelectedGame} />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/team" element={<Team />} />
        <Route path="/table" element={<Table />} />
        <Route path="/rules/:gameName" element={<Rules />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;