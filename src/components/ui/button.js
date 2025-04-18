
import React from 'react';
import './button.css';
const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#007BFE',
        color: 'white',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  );
};

export default Button;
