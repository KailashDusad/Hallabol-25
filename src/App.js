import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Games from './components/Games';
import RegisterForm from './components/RegisterForm';
import Team from './components/Team';
import Table from './components/Table';
import ErrorPage from './components/ErrorPage';
// import Rules from './components/Rules';
import './styles.css';

import Footsal from './Rules/Footsal';
import Badminton from './Rules/Badminton';
import Carrom from './Rules/Carrom';
import Dodgeball from './Rules/Dodgeball';
import FootVolley from './Rules/FootVolley';
import Frisbee from './Rules/Frisbee';
import GullyCricket from './Rules/GullyCricket';
import SevenStones from './Rules/SevenStones';
import KhoKho from './Rules/KhoKho';
import Throwball from './Rules/Throwball';
import Chess from './Rules/Chess';
import TugOfWar from './Rules/TugOfWar';

const App = () => {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/team" element={<Team />} />
        <Route path="/table" element={<Table />} />
        <Route path="/error" element={<ErrorPage />} />
        {/* <Route path="/rules/:gameName" element={<Rules />} /> */}
        <Route path="/rules/Footsal" element={<Footsal />} />
        <Route path="/rules/Badminton" element={<Badminton />} />
        <Route path="/rules/Carrom" element={<Carrom />} />
        <Route path="/rules/Dodgeball" element={<Dodgeball />} />
        <Route path="/rules/FootVolley" element={<FootVolley />} />
        <Route path="/rules/Frisbee" element={<Frisbee />} />
        <Route path="/rules/GullyCricket" element={<GullyCricket />} />
        <Route path="/rules/SevenStones" element={<SevenStones />} />
        <Route path="/rules/KhoKho" element={<KhoKho />} />
        <Route path="/rules/Throwball" element={<Throwball />} />
        <Route path="/rules/Chess" element={<Chess />} />
        <Route path="/rules/TugOfWar" element={<TugOfWar />} />


      </Routes>
      <Footer />
    </Router>
  );
};

export default App;