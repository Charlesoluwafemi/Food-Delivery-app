import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Ensure the root element exists in your HTML file
const rootElement = document.getElementById('root');

// Check if the root element is found before rendering
if (rootElement) {
  ReactDOM.render(<App />, rootElement);
} else {
  console.error("Unable to find the 'root' element in the HTML. Make sure it exists.");
}


