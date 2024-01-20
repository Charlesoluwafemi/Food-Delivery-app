// App.jsx
import React, { useState } from 'react';
import { Navbar } from './components';
import { Header, AboutUs, SpecialMenu, Chef, Intro, Laurels, Gallery, FindUs, Footer } from './container';
import Weekmenu from './components/pages/Weekmenu';
import Discoverybox from './components/pages/Discoverybox';
import Nicepresent from './components/pages/Nicepresent';
import Customerarea from './components/pages/Customerarea';
import Blog from './components/pages/Blog';
import LoginRegister from './components/pages/LoginRegister'; 
// Import the LoginRegister component
import Placeorder from './components/pages/Placeorder';

import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Weekmenu':
        return <Weekmenu />;
      case 'Discoverybox':
        return <Discoverybox />;
      case 'Nicepresent':
        return <Nicepresent />;
      case 'Customerarea':
        return <Customerarea />;
      case 'Blog':
        return <Blog />;
      case 'LoginRegister': // Add this case for LoginRegister
        return <LoginRegister />;
        case 'Placeorder':
          return <Placeorder />;

      default:
        return (
          <div>
            <Header />
            <AboutUs />
            <SpecialMenu />
            <Chef />
            <Intro />
            <Laurels />
            <Gallery />
            <FindUs />
            <Footer />
          </div>
        );
    }
  };

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;



