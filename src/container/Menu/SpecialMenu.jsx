// SpecialMenu.jsx

import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './SpecialMenu.css';
import { data } from '../../constants/data'; // Correct the path to the data file

const SpecialMenu = () => {
  const menuItems = data.menuItems; // Use the data directly from your constants

  const handleOrderClick = (title) => {
    // Implement the order functionality, e.g., redirect to an order page or show a modal
    console.log(`Order clicked for ${title}`);
  };

  return (
    <div className='app__specialMenu flex__center  section__padding' id='menu'>
      <div className='app__specialMenu-title'>
        <SubHeading title='Menu that fits your palate' />
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>
      <div className='app__specialMenu-menu'>
        {menuItems.map((menuItem, index) => (
          <div key={index} className='app__specialMenu-menu_item'>
            <img
              src={images[menuItem.image]}
              alt={`menu img${index + 1}`}
              className='app__specialMenu-menu_image'
            />
            <div className='app__specialMenu-menu_content'>
              <h2>{menuItem.title}</h2>
              <p>{menuItem.description}</p>
              <button onClick={() => handleOrderClick(menuItem.title)}>Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialMenu;


