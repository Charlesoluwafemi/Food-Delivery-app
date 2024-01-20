// MenuItem.js

import React from 'react';
import './MenuItem.css';

const MenuItem = ({ title, description }) => (
  <div className='app__menuitem'>
    <div className='app__menuitem-head'>
      <div className='app__menuitem-name'>
        <p className='p__cormrant' style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      <div className='app__menuitem-description'>
        <p className='p__cormrant'>{description}</p>
      </div>
    </div>
  </div>
);

export default MenuItem;

