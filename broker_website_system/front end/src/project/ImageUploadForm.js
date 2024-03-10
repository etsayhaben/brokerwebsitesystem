// ImageUploadForm.js (React component)

import React, { useState } from 'react';
import axios from 'axios';

const ImageUploadForm = () => {
  const [image, setImage] = useState(null);
  const [sellerId, setSellerId] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSellerIdChange = (e) => {
    setSellerId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('sellerId', sellerId);

    try {
      await axios.post('http://localhost:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // Handle success (e.g., show a success message)
      console.log('Image uploaded successfully');
    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error('Error uploading image:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleImageChange} />
      <input
        type="text"
        placeholder="Seller ID"
        value={sellerId}
        onChange={handleSellerIdChange}
      />
      <button type="submit">Upload Image</button>
    </form>
  );
};

export default ImageUploadForm;
