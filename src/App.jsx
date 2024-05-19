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
import Placeorder from './components/pages/Placeorder';
import IconContentPage from './components/pages/IconContent';

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
      case 'LoginRegister':
        return <LoginRegister />;
      case 'Placeorder':
        return <Placeorder />;
      case 'IconContent':
        return <IconContentPage />;
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
      <div className="container"> {/* Add a container to apply mobile-responsive styles */}
        {renderPage()}
      </div>
    </div>
  );
};

export default App;



