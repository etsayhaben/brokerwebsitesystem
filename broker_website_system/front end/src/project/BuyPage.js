import {useState} from 'react';
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import Header from './Header'
import './BuyPage.css'
const BuyPage=()=>
   {
       
           
           return(
               <div>
                <div>               
                     <Header/>
</div>
                <div class='section'>
                <p> what do you want to buy?</p>
                <div class='mobileLinks'>
                <Link to='/mobile_products'>
          <button>mobile</button>

          </Link>
          <Link to='/Villa_availables'>
          <button>Villa</button>

          </Link>
          <Link to='/cars_availables'>
          <button>cars</button>

          </Link>
                </div>
          
               
               </div>
               </div>

           );
    
      
           
   }
   export default BuyPage;