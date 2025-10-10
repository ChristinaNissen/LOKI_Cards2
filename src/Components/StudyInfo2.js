import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudyInfo2 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/www.dr.dk');
  };

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '600px',
      margin: '2rem auto',
      backgroundColor: '#FFD580', // consistent soft orange
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      color: '#333',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Study Information 2</h1>
      
      <p>
        You are almost done with our study. You only need to click the button below and complete a short survey about your experience of the voting system
      </p>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button
          onClick={handleNext}
          style={{
            padding: '0.75rem 2rem',
            backgroundColor: '#FFA500',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Go to survey
        </button>
      </div>
    </div>
  );
};

export default StudyInfo2;
