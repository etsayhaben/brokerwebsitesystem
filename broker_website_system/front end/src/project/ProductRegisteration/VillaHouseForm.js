// VillaHouseForm.jsx

import React, { useState } from "react";
import "./VillaHouseForm.css";

const VillaHouseForm = () => {
  const [villaInfo, setVillaInfo] = useState({
    address: "",
    bedrooms: 0,
    bathrooms: 0,
    price: "",
    squareFootage: 0,
    amenities: "",
    description: "",
    houseImage: null,
    ownershipDocument: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    // If the input is a file, update the state with the file itself
    if (type === "file") {
      setVillaInfo((prevInfo) => ({
        ...prevInfo,
        [name]: e.target.files[0],
      }));
    } else {
      setVillaInfo((prevInfo) => ({
        ...prevInfo,
        [name]: type === "number" ? Math.max(0, +value) : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log("Form submitted:", villaInfo);
  };

  return (
    <div className="villa-house-form-container">
      <h2>Sell Your Villa House</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={villaInfo.address}
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
            value={villaInfo.bedrooms}
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
            value={villaInfo.bathrooms}
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
            value={villaInfo.squareFootage}
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
            value={villaInfo.amenities}
            onChange={handleChange}
            placeholder="Enter amenities (e.g., pool, garden)"
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={villaInfo.description}
            onChange={handleChange}
            rows="4"
            placeholder="Enter a brief description of the villa"
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={villaInfo.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
          />
        </label>
        <label>
          House Image (required):
          <input type="file" name="houseImage" accept="image/*" required />
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

export default VillaHouseForm;
