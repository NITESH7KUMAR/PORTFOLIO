
import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  );
};

export default Button;
