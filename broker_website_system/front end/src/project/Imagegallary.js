import React from 'react';
import b from './image/b.jpg';
import brokerimage from './image/brokerimage.png'
import c from './image/c.jpg'
const Imagegallary = () => {
  return (
    <div>
      <div class="image-container">
        <div class="image-item">
          <img src={b} alt="Description 1" />
          <p>Description 1</p>
          <button>Buy Now</button>
        </div>
        <div className="image-item">
          <img src={brokerimage} alt="Description 2" />
          <p>Description 2</p>
          <button>Buy Now</button>
        </div>
        <div className="image-item">
          <img src={c} alt="Description 3" />
          <p>Description 3</p>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Imagegallary;
