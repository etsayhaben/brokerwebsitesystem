import React from 'react';
import './BodyBuyer.css'; // Make sure to import your stylesheet
import mobile1 from './image/mobile1.PNG'
import mobile2 from './image/mobile2.PNG'
import mobile3 from './image/mobile3.PNG'
import { Link } from "react-router-dom";

const ProductCard = ({ imageUrl, description, onClickBuy }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={imageUrl} alt="Product" />
        <div class="info">
          <p class="description">{description}</p>
          
          <Link to="/buy">
                <button class='m' type="button">Buy now</button>
              </Link>
        </div>
      </div>
      {/* Rest of the product card content */}
    </div>
  );
};

const ProductList = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      imageUrl: mobile1,
      description: '$5000',
    },
    {
      id: 2,
      imageUrl:mobile2,
      description: '$6000',
    },
    {
      id: 2,
      imageUrl:mobile3,
      description: '$7000',
    },
    // Add more products as needed
  ];

  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageUrl={product.imageUrl}
          description={product.description}
          onClickBuy={() => handleBuyClick(product.id)}
        />
      ))}
    </div>
  );
};

// You can handle the buy click event in the parent component
const handleBuyClick = (productId) => {
  // Handle the buy click for the specific product
  console.log(`Buy button clicked for product ${productId}`);
};

export default ProductList;
