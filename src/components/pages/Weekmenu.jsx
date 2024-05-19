import React from 'react';
import { images } from '../../constants';
import './Weekmenu.css' // Adjust the import based on your actual file structure

const Weekmenu = () => {
  const mealImages = [
    images.menu1,
    images.menu2,
    images.menu3,
    images.menu4,
    images.menu5,
    images.menu6,
    images.menu7,
    images.menu8,
    images.menu9,
    images.menu10,
    images.menu11,
    images.menu12,
    images.menu13,
    images.menu14,
    images.menu15,
    // Add more images as needed
  ];

  return (
    <div className="Weekmenu-container" id='Weekmenu'>
      <h2 className="subheading">Menu of the Week</h2>
      
      <div className="meal-images-container">
        {mealImages.map((image, index) => (
          <div key={index} className="meal-item">
            <img
              src={image}
              alt={`Meal ${index + 1}`}
              className="meal-image"
            />
            {/* Add content below each image */}
            <p className="meal-description">Description for Meal {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weekmenu;


