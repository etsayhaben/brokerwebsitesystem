
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logoimage from "./image/brokerlogo.jpg";
import BodyHomePage from "./BodyHomePage";
import './Loggedinpage.css';
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import brokerdealimage from './image/brokerlogo.jpg'
import Header from './Header'
import { useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { AutoContext } from "./Helpers/AutoContext";

export default function LoggedinPage() {
  const  {isAuthenticated} = useContext(AutoContext);

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [searchItem,setsearchItem]=useState();
    const navigate = useNavigate();
    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };
  
    const handleChange=(event)=>
  {
            setsearchItem(event.target.value);
  } 
  const handleSearchOptionClick = (option) => {
    // Add your logic based on the selected option
    console.log("Selected option:", option);
    navigate('/ImageGallery', { state: { option } });
    // You can add your specific logic here, e.g., redirecting to a different page
    setDropdownVisible(false); // Close the dropdown after selecting an option
       
  };
  // const location = useLocation();
   
  
  //// Initialize state with the value from location only once
  //  const [authorized, setAuthorized] = useState(location.state.authorized);
  
//  useEffect(() => {
//      // Update state if needed
//      setAuthorized(location.state.authorized);
//    }, [location.state.authorized]); // Run this effect when state.authorized changes
  
   const [data,somedata]=useState(false);
  return (

<div class='home-page-container'>
    <header className="custom-header">
    <div className="container">
      <div className="header-content">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img
               src={Logoimage}
              className="logo"
              alt="Logo"
              width="40"
              height="32"
            />
          </Link>
        </div>

        
        <div class="nav-links">
          <Link to="/">
            <button class='m' type="button">Home</button>
          </Link>

          <Link to="/sell"  state={{ origin: 'buylogged' }}>
            <button class='m' type="button">SellProduct</button>
          </Link>
          {
          data &&
          <Link to="/buy"  state={{ origin: 'buylogged' }}>
            <button class='m' type="button">BuyProduct</button>
          </Link>
              }

          <Link to="/about">
            <button class='m' type="button">About</button>
          </Link>
          
        </div>


        
        <form className="search-form" role="search">
              <div className="dropdown" onClick={toggleDropdown}>
                <input
                  type="search"
                  className="search-input"
                  placeholder="more products..."
                  aria-label="Search"
                  onChange={handleChange}
                />
                {dropdownVisible && (
                  <div className="dropdown-content">
                    <ul>
                      <li>
                        <Link to='/mobile_products'> <button
                          type="button"
                          class='options'
                          onClick={() => handleSearchOptionClick("name")}
                        >
                          Mobiles
                        </button></Link>
                       
                      </li>
                      <li>
                        <button
                        class='options'
                          type="button"
                          onClick={() => handleSearchOptionClick("model")}
                        >
                          Cars
                        </button>
                      </li>
                      <li>
                        <button
                        class='options'
                          type="button"
                          onClick={() => handleSearchOptionClick("brand")}
                        >
                          Villa Houses
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              </form>
     
          <Link  to="/" className="signup-button">
            <button  class='m' type="button">{!data&&(<p>login</p>)}</button>
          </Link>
          {
          !isAuthenticated
           && (<button>LoggedinPage</button>)}
      </div>
    </div>     
    </header> 
<BodyHomePage/>

     {/* <Footer />  */}
 
  </div>

  );
}
