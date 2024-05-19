import React from 'react';
import './Header.css'; // Assuming you have a separate CSS file for styling

// Import images from the images object
import { images } from '../../constants';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <h1>Save time with your personal chef</h1>
          <p className="subtitle">From €8.99/meal</p>
          <div className="homepage-image-container">
            <img src={images.homepage} alt="Homepag" className="homepage-image" />
          </div>
          <div className="features-container">
            <p className="feature">Cooked with love by your personal chef</p>
            <p className="feature">Delivery everywhere in Belgium</p>
            <p className="feature">Also pay with your meal vouchers</p>
            <p className="feature">Without any commitment</p>
          </div>
        </div>
        <div className="configure-link-container">
          <a href="/" className="configure-link">
            <img src={images.configure} alt="Configure my meal box" />
          </a>
        </div>
      </div>
      <div className="chef-recommendation">
        <h2><img src={images.Chef1} alt="Chef's recommendation" /></h2>
      </div>
      <div className="payment-methods">
        <img src={images.BanContact} alt="Bancontact" />
        <img src={images.Edened} alt="Edened" />
        <img src={images.ICBC} alt="KBC" />
        <img src={images.Paypal} alt="PayPal" />
      </div>
    </header>
  );
}

export default Header;