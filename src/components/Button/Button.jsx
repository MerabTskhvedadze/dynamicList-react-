import React from 'react';
import './Button.css';

function Button({ className, children, clickHandler }) {
  return (
    <button className={`btn ${className}`} onClick={clickHandler}>
      {children}
    </button>
  );
}

export default Button;
