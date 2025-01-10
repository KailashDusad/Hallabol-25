import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

const gameRules = {
  'Gully Cricket': 'Rules for Gully Cricket...',
  'Kho-Kho': 'Rules for Kho-Kho...',
  'Futsal': 'Rules for Futsal...',
  'Tug of War': 'Rules for Tug of War...',
  'Foot Volley': 'Rules for Foot Volley...',
  '4-a-side Baddy': 'Rules for 4-a-side Baddy...',
  'Seven Stone': 'Rules for Seven Stone...',
  'Freesbe': 'Rules for Freesbe...',
  'Throw Ball': 'Rules for Throw Ball...',
};

const Rules = () => {
  const { gameName } = useParams();
  const [loading, setLoading] = useState(true);
  const [rules, setRules] = useState('');

  useEffect(() => {
    if (gameName) {
      setRules(gameRules[gameName] || 'No rules available for this game.');
      setLoading(false);
    }
  }, [gameName]);

  if (loading) {
    return (
      <div className="loader-container">
        <ClipLoader size={80} color="#4fa94d" loading={loading} />
      </div>
    );
  }

  return (
    <section id="rules" className="rules-section">
      <div className="container">
        <h2>Rules for {gameName}</h2>
        <p>{rules}</p>
      </div>
    </section>
  );
};

export default Rules;