import React, { useState } from 'react';
import './Navigation.css'; // Your CSS file for additional styles


const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    // Perform search functionality using searchQuery state
  };

  const handleLogin = (event) => {
    event.preventDefault();
    
    // For demonstration purposes
    // Implement your login functionality
  
  };

  const showDropdown = () => {
    setShowProducts(true);
  };

  const hideDropdown = () => {
    setShowProducts(false);
  };

  return (
    <div className="navbar">
      <a href="#home">Home</a>
      <a href="#buy">Buy</a>
      <a href="#sell">Sell</a>
      <a href="#rent">Rent</a>
      <div
        className="dropdown"
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
      >
        <button className="dropbtn">catagories</button>
        {showProducts && (
          <div className="dropdown-content">
            <a href="#electronics">Electronics</a>
            <a href="#machinery">Machinery</a>
            <a href="/Login">House</a>
          </div>
        )}
      </div>
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
        <button className="login-btn" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Navigation;
