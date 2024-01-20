import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus' id='about'>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>Temporary Offer</h1>
        <div className='app__aboutus-overlay'>
          {/* Temporary Offer Image */}
        </div>
        <p className='p__opensans'>
          Je choisis mes plats Chaque semaine, Fresheo me propose des recettes variées,
          cuisinées avec des produits frais et sans conservateurs
        </p>
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>How my subscription work?</h1>
        <div className='app__aboutus-overlay'>
          <div className='overlay-item'>
            <img src={images.sub1} alt='Subscription 1' />
            <div className='overlay-content'>
              <h2>1. I choose my dishes</h2>
              <span>Every week, Freshia offers me varied recipes, cooked with fresh products and without preservatives</span>
            </div>
          </div>
          <div className='overlay-item'>
            <img src={images.sub2} alt='Subscription 2' />
            <div className='overlay-content'>
              <h2>2. My chef cooks for me</h2>
              <span>Accompanied by his clerks, my personal chef takes care of everything. My meals are cooked here in Belgium with all the necessary attention</span>
            </div>
          </div>
          <div className='overlay-item'>
            <img src={images.sub3} alt='Subscription 3' />
            <div className='overlay-content'>
              <h2>3. Deliver wherever I want</h2>
              <span>Delivery to work_ At home _ The morning _ The evening _ Fresheo’s fleet of vans meets all my expectations</span>
            </div>
          </div>
          <div className='overlay-item'>
            <img src={images.sub4} alt='Subscription 4' />
            <div className='overlay-content'>
              <h2>4. I heat it up and it's ready</h2>
              <span>Eating healthily without constraints is quick! In 3 minutes in the microwave or 12 minutes in a conventional oven, my dish is ready!</span>
            </div>
          </div>
        </div>
        <p className='p__opensans'>
          Je choisis mes plats Chaque semaine, Fresheo me propose des recettes variées,
          cuisinées avec des produits frais et sans conservateurs
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
