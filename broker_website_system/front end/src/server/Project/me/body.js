// App.js

import React from 'react';
import './body.css';

const Body1 = () => {
  return (
    <div className="container">
      <h1>
        Welcome to broker website system <br />
        We are ready to serve you our dears
      </h1>
      <div className="image-container">
        <img
          src="/path/to/your/image1.jpg"
          alt="Image 1"
        />
        <img
          src="/path/to/your/image2.jpg"
          alt="Image 2"
        />
        <img
          src="/path/to/your/image3.jpg"
          alt="Image 3"
        />
      </div>
      <p>
        Additional text or description around the end of the images.
      </p>
    </div>
  );
};

export default Body1;
