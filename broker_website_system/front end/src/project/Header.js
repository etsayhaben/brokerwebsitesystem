import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logoimage from './image/brokerlogo.jpg'; // Replace with the actual path to your image file
import "./header.css"; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AutoContext } from './Helpers/AutoContext';
function Header() {
  const  {setAuthenticated,isAuthenticated} = useContext(AutoContext);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchItem,setsearchItem]=useState();
  const navigate = useNavigate();

  const handleChange=(event)=>
  {
            setsearchItem(event.target.value);
  } 
 const resetAuthentication=()=>
 {
  setAuthenticated(false);
 }
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSearchOptionClick = (option) => {
    // Add your logic based on the selected option
    console.log("Selected option:", option);
    switch(option)
    {
      case 'phone':
        navigate('/mobile_products', { state: { option } });
        break;
      case 'Houses':
        navigate('/sell', { state: { option } });
          break;
      default:
         navigate('/');
    
    // You can add your specific logic here, e.g., redirecting to a different page
    setDropdownVisible(false); // Close the dropdown after selecting an option
    }   
  };

  return (
    <div>
      <header class="custom-header">
        <div class="container">
          <div class="header-content">
            <div class="logo-container">
              <Link to="/" class="logo-link">
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

              <Link to="/Login"  state={{ origin: 'sell' }}>
                <button class='m' type="button">SellProduct</button>
              </Link>

              <Link to="/Login"  state={{ origin: 'buy' }}>
                <button class='m' type="button">BuyProduct</button>
              </Link>

              <Link to="/about">
                <button class='m' type="button">{!isAuthenticated&&<p>value</p>}</button>
              </Link>
            </div>

            {/* <form className="search-form" role="search"> */}
              {/* <div className="dropdown" onClick={toggleDropdown}>
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
                        <Link to='/ImageGallery'> <button
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
              </div> */}
            <form className="search-form" role="search">
              <div className="dropdown" onClick={toggleDropdown}>
                <input
                  type="search"
                  className="search-input"
                  placeholder="more products..."
                  aria-label="Search"
                  readOnly
                />
                {dropdownVisible && (
                  <div className="dropdown-content">
                    <ul>
                      <li>
                        <Link to='/mobile_products'> <button
                          type="button"
                          class='options'
                          onClick={() => handleSearchOptionClick("Option 1")}
                        >
                          Mobiles
                        </button></Link>
                       
                      </li>
                      <li>
                        <button
                        class='options'
                          type="button"
                          onClick={() => handleSearchOptionClick("Houses")}
                        >
                          Houses
                        </button>
                      </li>
                      <li>
                        <button
                        class='options'
                          type="button"
                          onClick={() => handleSearchOptionClick("car")}
                        >
                          cars
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </form>

            <div className="user-actions">
              
              
             {
             !isAuthenticated ?(
              <>
              <Link to="/login" className="login-button">
                <button class='m' type="button">Login</button>
              </Link>
              <Link  to="/signup" className="signup-button">
                <button  class='m' type="button">Sign-up</button>
              </Link></>
              ):(<Link to='/'><button onClick={resetAuthentication}>logout</button></Link>
              )
             }
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
