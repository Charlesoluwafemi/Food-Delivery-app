import React from 'react';
import { images } from '../../constants';
import './Laurels.css'; // Import the CSS file

const laurelData = [
  {
    image: images.promise1,
    alt: 'laurel1',
    title: 'Savimg Time',
    description: 'Ordering from Fresheo means saving time.'
  },
  {
    image: images.promise2,
    alt: 'laurel 2',
    title: 'Fresh, preservative-free and local',
    description: 'We pay extreme attention to the origin of the ingredients.'
  },
  {
    image: images.promise3,
    alt: 'Easy delivery',
    title: 'Easy delivery',
    description: 'At Fresheo, we deliver on time.'
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