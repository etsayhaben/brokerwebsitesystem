import React from 'react';
import './BodyHomePage.css';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import myImage from './image/c.jpg'; // Replace with the actual path to your image file
import mysecond from './image/b.jpg'; // Replace with the actual path to your image file
import buyingahome from './image/house3.jpg'
import mythird from './image/mobilephone.jpg'; // Replace with the actual path to your image file
import Slideshow from './Slideshow';
import Imagegallery from './Imagegallary';
import BodyBuyer from './ProductList';
import ProductList from './ProductList';

const BodyHomePage = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [detail,setdetail]=useState();
  const me = () =>
  {
     
  }
  const handleShowDetails = () => {
    // Toggle the value of showDetails when the button is clicked
    setShowDetails(!showDetails);
   
  };
  return (
    <div class="body-container">
        <div class='sellsection'>

      <div class="headings">
        <div class='row'>
          <div class='column'>  
          <h4>Discover Your Perfect Match with Our Services. haben"</h4>
          <Link to='/mobile_products'>
          <button class='more'> more products</button>
          </Link>
</div>
      <div class='column'> 
      
<p class='someword'>"Your Premier Platform for Seamless Buyer-Seller Connections.</p> 
      <Slideshow class='slide'/> 
      <h4 class='descrip'>Trade Smart: Sell Easy, Buy Quick</h4>

           <ProductList/>


</div>

      

        </div>
        {/* <img class='buyingahome' src={buyingahome}></img> */}

</div>
     {/* <Imagegallery/> */}
  <div
  class='exprience'>
    <p>our exprience</p>
    Our Experience, Your Assurance

At DreamHome Realty, our journey 
in the real estate industry is not just
 measured in years but in the countless
  successful stories we've written alongside 
  our clients. With a legacy built on trust, integrity, and unwavering commitment, our
 experience sets us apart as your trusted partner in real estate.
  </div>
     
        {/* <Link to='/detail'>
        <button class='buy'>buy products</button>
       

        </Link> */}
</div>
<div class="sell">

    <h2 class='share'>
    Share your listings with us.
    <Link to="/Login"  state={{ origin: 'sell' }}>
                <button class='m' type="button">SellProduct</button>
              </Link>
              </h2>
       
       <div class='contentonsell'>
        <p class='descriptiononsell'>Whether you're in the
         market for a new home or looking to sell your 
         property, our expert team is here
         to guide you through every step of the process.</p>
        <img class='image' alt='image'></img>
        
       </div>
       <div class='trustship'>
        
       </div>

    
</div>
    </div>
  );
};

export default BodyHomePage;
