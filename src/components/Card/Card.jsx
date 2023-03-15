import React from 'react';
import Button from '../Button/Button';

import './Card.css';

function Card({ img, title, desc }) {
  return (
    <div className='card'>
      <div className='card__header'>
        <img src={img} alt='logo' />
        <Button>Show more</Button>
      </div>
      <div className='card__main'>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Card;
