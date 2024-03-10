// App.js

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Header1 from "./projects/Header";
// import ApartmentForm from "./ApartmentForm";
// import MobileForm from "./mobileform";
// import CarForm from "./project/Carform";
// import SlideShow from "./projects/slideshows";
// import Slideshowhtml from "./projects/slideshowhtml";
// //import TelevisionForm from "./TelevisionForm";
// // import MobileForm from "./MobileForm"; // Correct import name
// function App() {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<CarForm />} />
//           <Route path="/appartment-form" element={<ApartmentForm />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signup from "./Signup";
import SellPage from "./SellPage";
import Login from "./Login";
import HomePage from "./HomePage";
import LoggedinPage from "./LoggedinPage";
import MobileForm from "./ProductRegisteration/MobileForm";
import VillaHouseForm from "./ProductRegisteration/VillaHouseForm";
import CarForm from "./ProductRegisteration/Carform";
import Payment from "./Payment";
import BuyPage from "./BuyPage";
import MobileAvailables from "./MobileAvailables";
import Detail from "./Detail";
import AdminPage from "./AdminPage";
import MobileProducts from "./MobileProducts";
import Customers from "./Customers";
import About from "./About";
import {useState} from 'react'
import { AutoContext } from "./Helpers/AutoContext";

function App() {

  const [isAuthenticated,setAuthenticated]=useState(false);
  return (
    <div>
      
        <div>
          <AutoContext.Provider value={{isAuthenticated,setAuthenticated}}>
          <Router>
          <Routes>
            
          <Route path="/" element={<HomePage />} />
          <Route path="/sell" element={<SellPage/>} />
           <Route path="/buy" element={<BuyPage />} />
           {/* <Route path="/about" element={<ApartmentForm />} />  */}
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/LoggedinPage" element={<LoggedinPage />} />
          <Route path="/mobile_form" element={<MobileForm />} />
          <Route path="/car_form" element={<CarForm />} />
          <Route path="/villa_form" element={<VillaHouseForm/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/mobile_products" element={<MobileProducts/>} />
          <Route path="/detail" element={<Detail/>} />
          <Route path="/adminpage" element={<AdminPage/>} />
          <Route path="/Customers" element={<Customers/>} />
          <Route path="/about" element={<About />} />

          
        </Routes>
          </Router>
          </AutoContext.Provider>
         
        </div>
    </div>
  );
}

export default App;
