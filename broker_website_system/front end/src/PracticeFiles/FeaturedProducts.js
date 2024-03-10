import React from 'react';
import carImage from './23.jpg';
import './FeaturedProducts.css'
const FeaturedProducts = () => {
  // Dummy data for featured products (replace with actual product data)
  const featuredProducts = [
    {
      id: 1,
      name: 'Car',
      description: 'A beautiful car for your adventures.',
      imageUrl: carImage, // Placeholder image URL for a car
    },
    {
      id: 2,
      name: 'House',
      description: 'Your dream house with a garden view.',
      imageUrl: carImage // Placeholder image URL for a house
    },
    {
      id: 3,
      name: 'Toyota Car',
      description: 'Toyota car - efficient and reliable.',
      imageUrl: carImage, // Placeholder image URL for a Toyota car
    },
    {
        id: 4,
        name: 'machinary',
        description: 'usefull for developing somethign',
        imageUrl: carImage, // Placeholder image URL for a Toyota car
      },
  ];

  return (
    <div>
      {/* Other sections... */}

      {/* Featured Products Section */}
      <div>
        <h2>Featured Products</h2>
        {/* Display featured products here */}
        <div className="featured-products">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <img src={product.imageUrl} alt={product.name} />
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Other sections... */}
    </div>
  );
};

export default FeaturedProducts;
