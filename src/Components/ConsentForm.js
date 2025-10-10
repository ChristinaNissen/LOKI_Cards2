import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConsentForm = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/studyinfo1');
  };

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '600px',
      margin: '2rem auto',
      backgroundColor: '#FFD580', // soft orange
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      color: '#333',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Consent Form</h1>
      
      <p>
        Welcome to our study! Please read the following information carefully. By continuing, you agree to participate voluntarily.
      </p>
      
      <ul>
        <li>You can withdraw at any time without penalty.</li>
        <li>Your responses will be kept confidential and anonymous.</li>
        <li>The study is for research purposes only.</li>
      </ul>

      <p>
        If you understand and consent, please click "Next" to continue.
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
          Next
        </button>
      </div>
    </div>
  );
};

export default ConsentForm;
