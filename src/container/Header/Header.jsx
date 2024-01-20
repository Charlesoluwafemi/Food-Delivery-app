// Header.jsx
import React from 'react';
import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header' id='home'>
    <div className='app__header-content'>
      <SubHeading title='Chase the new flavour' />
      <h1 className='app__header-h1'>
        Get a tasty dish
      </h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        Save time with your personal chef From $8.99/meal
      </p>
      <button type='button' className='custom__button'>
        Explore Menu
      </button>
    </div>
    <div className='app__header-img'>
      <img src={images.homepage} alt='header img'/>
    </div>
  </div>
);

export default Header;
