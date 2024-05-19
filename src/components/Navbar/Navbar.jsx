import './Navbar.css';
import images from '../../constants/images';
import React, { useState } from 'react';
import LoginRegister from '../pages/LoginRegister';
import IconContentPage from '../pages/IconContent'; // Import the IconContentPage component

const Navbar = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginRegister, setShowLoginRegister] = useState(false);
  const [showIconContent, setShowIconContent] = useState(false); // State to control the visibility of icon content

  const handleItemClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    setShowIconContent(false); // Hide the icon content when other pages are clicked
  };

  const handleUserProfileClick = () => {
    setShowLoginRegister(true);
    setIsMenuOpen(false);
    setShowIconContent(false); // Hide the icon content when user profile is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleIconContent = () => {
    setShowIconContent(!showIconContent); // Toggle the visibility of icon content
  };

  const pageNames = [
    'Weekmenu', 'Discoverybox', 'Nicepresent',
    'Customerarea', 'Blog', 'Placeorder',
  ];

  return (
    <header className='app__navbar'>
  <div className='app__navbar-content'>
    <a href="/" className='app__navbar-logo'>
      <img src={images.bonregal} alt='Bonregal Logo' />
    </a>
    
    <ul className={`app__navbar-links-mobile ${isMenuOpen ? 'open' : ''}`}>
      {pageNames.map((page, index) => (
        <li key={index} className='p__opensans' onClick={() => handleItemClick(page)}>
          <a href={`#${page.toLowerCase()}`} className='navbar-link'>{page}</a>
        </li>
      ))}
    </ul>

    <ul className='app__navbar-links'>
      {pageNames.map((page, index) => (
        <li key={index} className='p__opensans' onClick={() => handleItemClick(page)}>
          <a href={`#${page.toLowerCase()}`} className='navbar-link'>{page}</a>
        </li>
      ))}
    </ul>

    {/* Icon for Questions */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" className="i-icon" onClick={toggleIconContent} fill="#D62D7E"> {/* Apply color directly */}
      <path className="fa-secondary" fill="currentColor" strokeWidth="2" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
    </svg>
    
    {showIconContent && <IconContentPage />} {/* Render the IconContentPage if showIconContent is true */}
    
    <a href="#profile" className='userprofile' onClick={handleUserProfileClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20" fill="#D62D7E"> {/* Apply color directly */}
        <g className="fa-duotone-group">
          <path className="fa-secondary" fill="#555" d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128z"></path>
          <path className="fa-primary" fill="#555" d="M0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"></path>
        </g>
      </svg>
    </a>

    <button className='mobile-menu-button' onClick={toggleMenu}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20">
        <path fill="currentColor" d="M0 88C0 74.7 10.7 64 24 64H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 112 0 101.3 0 88zM0 248c0-13.3 10.7-24 24-24H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zM448 408c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H424c13.3 0 24 10.7 24 24z"></path>
      </svg>
    </button>
  </div>

  {showLoginRegister && <LoginRegister />}
</header>



);
};

export default Navbar;