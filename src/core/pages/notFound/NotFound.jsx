import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='img'>
        <img src='https://i.ibb.co/KjJSv48/004.jpg' alt='not found' />
        <div className='not-found__link'>
          <Link className='link' to='/'>
            Voltar a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
