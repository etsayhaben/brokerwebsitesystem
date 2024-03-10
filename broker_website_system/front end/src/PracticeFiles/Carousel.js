import React, { useState, useEffect } from 'react';

const ImageCarousel = () => {
 const [imageIndex, setImageIndex] = useState(0);

 const images = [
    'image1.https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcars&psig=AOvVaw2SkNqs3Ie-I6CLm0UzfG3n&ust=1703873718141000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDkjMLesoMDFQAAAAAdAAAAABAEjpg',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcars&psig=AOvVaw2SkNqs3Ie-I6CLm0UzfG3n&ust=1703873718141000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDkjMLesoMDFQAAAAAdAAAAABAE.jpg',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcars&psig=AOvVaw2SkNqs3Ie-I6CLm0UzfG3n&ust=1703873718141000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDkjMLesoMDFQAAAAAdAAAAABAE.jpg',
    // add more images as needed
 ];

 useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((imageIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
 }, [imageIndex]);

 return (
    <div>
      <img src={images[imageIndex]} alt="carousel" />
    </div>
 );
};

export default ImageCarousel;