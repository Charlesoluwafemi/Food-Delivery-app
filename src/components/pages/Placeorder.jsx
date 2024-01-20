import React from 'react';
import './Placeorder.css'; // Import your CSS file

const Placeorder = () => {
  return (
    <div className="place-order-container">
      <h1>Place Your Order</h1>

      <div className="order-steps">
        <div className="order-step">
          <span>1</span>
          <p>Menu Choice</p>
        </div>
        <div className="order-step">
          <span>2</span>
          <p>Your Meals</p>
        </div>
        <div className="order-step">
          <span>3</span>
          <p>Delivery</p>
        </div>
      </div>

      <div className="language-options">
        <p>Select Your Language:</p>
        <div className="language-buttons">
          <button>FR</button>
          <button>NL</button>
          <button>IN</button>
        </div>
      </div>

      <div className="order-details">
        <div className="order-option">
          <label htmlFor="mealsPerWeek">How Many Meals Per Week?</label>
          <select id="mealsPerWeek">
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div className="order-option">
          <label htmlFor="numberOfPersons">Number of Persons</label>
          <select id="numberOfPersons">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>

        <div className="order-option">
          <label htmlFor="numberOfMeals">Number of Meals</label>
          <select id="numberOfMeals">
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>

      <div className="subscription-details">
        <p>Your Subscription:</p>
        <p><span>0</span> people, <span>0</span> meals per week</p>
        <p>i.e. 0 meals delivered to your home each week</p>
      </div>

      <div className="price-details">
        <p>Without Promotion: NaN €</p>
        <p>Your Price: NaN €*</p>
        <p>Or only NaN € per meal</p>
      </div>

      <div className="promo-code">
        <label htmlFor="promoCode">Do You Have a Promo Code?</label>
        <input type="text" id="promoCode" />
        <button>Check</button>
        <p>€30.0 reduction for your first 3 boxes</p>
      </div>

      <div className="delivery-date">
        <label htmlFor="deliveryDate">First Delivery Date:</label>
        <input type="text" id="deliveryDate" placeholder="Between 01/27/2024 and 01/30/2024" />
        <p>* Delivery costs not included</p>
      </div>

      <button className="order-button">Set Up Your Weekly Delivery</button>
    </div>
  );
};

export default Placeorder;
