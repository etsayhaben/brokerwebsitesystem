// MobileAvailables.js
import Header from './Header'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./mobileavailables.css"; // Corrected file name
import mobile1 from "./image/mobile1.PNG";
import mobile2 from "./image/mobile2.PNG";
import mobile3 from "./image/mobile3.PNG";
import mobile4 from "./image/mobile4.PNG";
import mobile5 from "./image/mobile5.PNG";
import mobile6 from "./image/mobile6.PNG";
import mobile7 from "./image/mobile7.PNG";
import mobile8 from "./image/mobile1.PNG";
import mobile9 from "./image/mobile2.PNG";
import backgroundImage from "./image/background1.PNG"; // Add your background image

const MobileAvailables = () => {
  const [showDetails, setShowDetails] = useState(Array(9).fill(false));

  const handleShowDetails = (index) => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };

  const mobileImages = [
    mobile1,
    mobile2,
    mobile3,
    mobile4,
    mobile5,
    mobile6,
    mobile7,
    mobile8,
    mobile9,
  ];

  return (
    <section
      className="header"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header/>
      <div className="overlay"></div>
      <div className="header-content">
        <h2>These Are Available Mobile Phones</h2>
        <h2>Choose whatever you want</h2>
      </div>
      <div className="imagessorting">
        {mobileImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Mobile ${index + 1}`} />
            <button onClick={() => handleShowDetails(index)}>
              Show Details
            </button>
            {showDetails[index] && (
              <div className="details">
                <p>
                  This is Samsung
                  <br />
                  Price: $20,000
                  <br />
                  Model: S10
                  <br />
                  Status: Used
                  <br />
                  Battery Life: 10 hours
                  <Link to="/payment">
                    <button type="button">Buy Product</button>
                  </Link>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileAvailables;
