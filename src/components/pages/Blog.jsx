// BlogPage.jsx

import React from 'react';
import './Blog.css'; // Import the CSS file for BlogPage
import { images } from '../../constants';

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-item">
        <img src={images.Article1} alt="Last Articles" />
        <div className="blog-text">
          <h3>Last Articles</h3>
          <p>
            Immerse yourself in the world of healthy cooking with my blog: tips for balanced meals,
            culinary discoveries and much more to transform your daily life.
          </p>
          <button className="learn-more-button">Learn more</button>
        </div>
      </div>

      <div className="blog-item">
        <img src={images.Article2} alt="Slimming Menu" />
        <div className="blog-text">
          <h3>How to choose a slimming menu to lose weight?</h3>
          <p>
            Find out how to choose a suitable slimming menu for healthy and lasting weight loss.
            Advice on a balanced diet, home meal delivery in Belgium, and the importance of sport
            in your slimming journey.
          </p>
          <button className="learn-more-button">Learn more</button>
          
        </div>
      </div>

      <div className="blog-item">
        <img src={images.Article3} alt="Healthy Meal Delivery" />
        <div className="blog-text">
          <h3>How I Simplified My Life with Healthy Meal Delivery</h3>
          <p>
            I'm exploring the world of healthy home meal deliveries: fresh produce, delicious recipes,
            and all the convenience. Follow my journey to a balanced diet.
          </p>
          <button className="learn-more-button">Learn more</button>
        </div>
      </div>

      <div className="blog-item">
        <img src={images.Article4} alt="Gourmet Tasting" />
        <div className="blog-text">
          <h3>Gourmet Tasting: My Experience with Fresheo Boxes</h3>
          <p>
            Exploring Fresheo delights: balanced meals, prepared by chefs, delivered to my home.
            Discover my verdict on these practical and tasty boxes.
          </p>
          <button className="learn-more-button">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
