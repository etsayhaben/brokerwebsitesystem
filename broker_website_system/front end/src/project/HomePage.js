// HomePage.jsx

import React from 'react';
import Header from './Header';
import BodyHomePage from './BodyHomePage';
import Footer from './Footer';
import './HomePage.css'; // Import your custom styles
import { AutoContext } from './Helpers/AutoContext';
import { useContext } from 'react';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
const HomePage = () => {
  const  {isAuthenticated,setAuthenticated} = useContext(AutoContext);
  return (
    <div class='home-page-container'>
     
     <AutoContext.Provider value={{isAuthenticated,setAuthenticated}}>
     <Header />
      <BodyHomePage />
       <Footer /> 
      </AutoContext.Provider> 
     
    </div>
  );
}

export default HomePage;
