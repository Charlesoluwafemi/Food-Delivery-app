// ... (imports)
import images from '../../constants/images';
import './Navbar.css';
import React, { useState } from 'react';

const Navbar = ({ setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleItemClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Close the menu after clicking on a page
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pageNames = [
    'Home', 'Weekmenu', 'Discoverybox', 'Nicepresent',
    'Customerarea', 'Blog', 'LoginRegister', 'Placeorder'
  ];

  return (
    <header className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.bonregal} alt='app logo' />
      </div>

      {/* Render the desktop menu */}
      <ul className='app__navbar-links'>
        {pageNames.map((page, index) => (
          <li key={index} className='p__opensans' onClick={() => handleItemClick(page)}>
            <a href={`#${page.toLowerCase()}`}>{page}</a>
          </li>
        ))}
      </ul>

      {/* Render the mobile menu on the right side */}
      <ul className={`app__navbar-links-mobile ${isMenuOpen ? 'open' : ''} right-side`}>
        {pageNames.map((page, index) => (
          <li key={index} className='p__opensans' onClick={() => handleItemClick(page)}>
            <a href={`#${page.toLowerCase()}`}>{page}</a>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon for Mobile */}
      <div className='hamburger-icon' onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
    </header>
  );
};

export default Navbar;
