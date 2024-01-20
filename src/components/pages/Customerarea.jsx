import React from 'react';
import './Customerarea.css'

const Customerarea = () => {
  return (
    <div className="customer-area-container">
      <div className="box">
        <h2>Hello, huh!</h2>
      </div>

      <div className="box">
        <h3>Subscriptions</h3>
        <button className="action-button">Click here to try Fresheo!</button>
        <button className="action-button">See the weekly menu</button>
        <p>Invoices</p>
      </div>

      <div className="box">
        <h3>Credits</h3>
        <p>€</p>
        <button>Give my opinion</button>
      </div>

      <div className="box">
        <h3>Sponsorship</h3>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Invalid email" />

          <label>Name</label>
          <input type="text" placeholder="First name" />

          <button>Invite this person and win €40</button>
        </form>
      </div>
    </div>
  );
};

export default Customerarea;

