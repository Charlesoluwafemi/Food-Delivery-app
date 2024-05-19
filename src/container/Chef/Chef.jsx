import React from 'react';
import './Chef.css';

const Chef = () => {
  const handleNumberClick = (number) => {
    // Placeholder logic for handling number click
    console.log(`Number ${number} clicked`);
  };

  const handleContinueClick = () => {
    // Placeholder logic for handling continue button click
    console.log('Continue button clicked');
  };

  return (
    <div className="chef-page">
      <div className="chef-container">
        <h1 className="chef-title">How many meals do you want per week?</h1>
        <div className="number-selection">
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <div key={number} className={`circle-number ${number === 1 ? 'red' : ''}`} onClick={() => handleNumberClick(number)}>
              {number}
            </div>
          ))}
        </div>
        <p className="number-of-meals-text">Number of meals</p>
        <div className="number-selection">
          {[4, 5, 6, 7, 8, 9, 10].map((number) => (
            <div key={number} className={`circle-number ${number === 8 ? 'red' : ''}`} onClick={() => handleNumberClick(number)}>
              {number}
            </div>
          ))}
        </div>
        <div className="centered-button-container">
          <button className="continue-button" onClick={handleContinueClick}>
            Continue
          </button>
        </div>
        <div className="person-meals-text">
          <p>
            1 person, 4 meals per week,
            i.e. 4 meals delivered to your home each week
          </p>
        </div>
        <div className="price-info">
          <p>Without promotion: € 53.96</p>
          <p>Your price: € 43.96 *</p>
          <p>Or only € 10.99 per meal</p>
        </div>
      </div>
    </div>
  );
};

export default Chef;




