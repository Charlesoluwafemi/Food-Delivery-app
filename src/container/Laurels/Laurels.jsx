import React from 'react';
import { images } from '../../constants';
import './Laurels.css'; // Import the CSS file

const laurelData = [
  {
    image: images.promise1,
    alt: 'laurel1',
    title: 'Savimg Time',
    description: 'Ordering from Fresheo means saving time. Leave the choice of recipes, shopping, cooking and washing up to us and focus on what really matters to you!',
  },
  {
    image: images.promise2,
    alt: 'laurel 2',
    title: 'Fresh, preservative-free and local',
    description: 'We pay extreme attention to the origin of the ingredients. Our suppliers are all within a radius of less than 30 km from the kitchen and we only choose fresh ingredients without preservatives.',
  },
  {
    image: images.promise3,
    alt: 'Easy delivery',
    title: 'Easy delivery',
    description: 'At Fresheo, we send you an SMS informing you of a short time slot on the Thursday preceding your delivery and an SMS which gives the precise time the same day. Nomore deliveries for which we block an entire day!',
  },
];

const Laurels = () => (
  <div className="container">
    <h2 className="subheading">Our Promises</h2>
    
    {laurelData.map((laurel, index) => (
      <div className="laurel-item" key={index}>
        <img src={laurel.image} alt={laurel.alt} className="laurels-image" />
        <h3 className="title">{laurel.title}</h3>
        <p className="description">{laurel.description}</p>
      </div>
    ))}

    <button className="order-button">Order Now</button>

  </div>
);

export default Laurels;