// ApartmentForm.jsx
import axios from "axios";

import React, { useState } from "react";
import "./ApartmentForm.css";

const ApartmentForm = () => {
  const [apartmentInfo, setApartmentInfo] = useState({
    address: "",
    bedrooms: 0,
    bathrooms: 0,
    price: "",
    squareFootage: 0,
    amenities: "",
    description: "",
    apartmentImage: null,
    ownershipDocument: null,
  });
  

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // If the input is a file, update the state with the file itself
    if (type === "file") {
      setApartmentInfo((prevInfo) => ({
        ...prevInfo,
        [name]: e.target.files[0],
      }));
    } else {
      setApartmentInfo((prevInfo) => ({
        ...prevInfo,
        [name]: type === "number" ? Math.max(0, +value) : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if image file is provided
    // if (!ownershipFile) {
    //   setImageFileError("Please choose an image file.");
    //   return;
    // }

    // // Check if legal ownership document file is provided
    // if (!ownershipDocument) {
    //   setOwnershipFileError("Please choose a legal ownership document file.");
    //   return;
    // }

    
    // Prepare form data for submission
    const formDataToSend = new FormData();
    formDataToSend.append("address", apartmentInfo.address);
    formDataToSend.append("bedrooms", apartmentInfo.bedrooms);
    formDataToSend.append("price", apartmentInfo.price);
    formDataToSend.append("squareFootage", apartmentInfo.squareFootage);
    formDataToSend.append("amenities", apartmentInfo.amenities);
    formDataToSend.append("description", apartmentInfo.description);
    formDataToSend.append("apartmentImage", apartmentInfo.apartmentImage);
    formDataToSend.append("ownershipDocument",apartmentInfo. ownershipDocument);


    try {
    
      // Make an HTTP POST request to the backend using Axios
      const response = await axios.post("http://localhost:8000/apartment_submit", formDataToSend);

      if (response.status === 200) {
        // Reset the form after successful submission
        setApartmentInfo({
          address: "",
          bedrooms: "",
          bathrooms: "",
          squareFootage: "",
          amenities: "",
          price: "",
          description: "",
        });
       
        console.log("submitted");
        alert("submitted succesfully");
    } else {
        // Handle server-side errors
      }
    } catch (error) {
      // Handle network errors
    }
  };


  return (
    <div className="apartment-form-container">
      <h2>Sell Your Apartment</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={apartmentInfo.address}
            onChange={handleChange}
            placeholder="Enter address"
            required
          />
        </label>
        <label>
          Bedrooms:
          <input
            type="number"
            name="bedrooms"
            value={apartmentInfo.bedrooms}
            onChange={handleChange}
            placeholder="Enter number of bedrooms"
            required
            min="0"
          />
        </label>
        <label>
          Bathrooms:
          <input
            type="number"
            name="bathrooms"
            value={apartmentInfo.bathrooms}
            onChange={handleChange}
            placeholder="Enter number of bathrooms"
            required
            min="0"
          />
        </label>
        <label>
          Square Footage:
          <input
            type="number"
            name="squareFootage"
            value={apartmentInfo.squareFootage}
            onChange={handleChange}
            placeholder="Enter square footage"
            required
            min="0"
          />
        </label>
        <label>
          Amenities:
          <input
            type="text"
            name="amenities"
            value={apartmentInfo.amenities}
            onChange={handleChange}
            placeholder="Enter amenities (e.g., balcony, parking)"
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={apartmentInfo.description}
            onChange={handleChange}
            rows="4"
            placeholder="Enter a brief description of the apartment"
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={apartmentInfo.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
          />
        </label>
        <label>
          Apartment Image (required):
          <input type="file" name="apartmentImage" accept="image/*" required />
        </label>
        <label>
          Legal Ownership Document (required):
          <input
            type="file"
            name="ownershipDocument"
            accept=".pdf, .doc, .docx"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApartmentForm;
