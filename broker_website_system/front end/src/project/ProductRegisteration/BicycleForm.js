// BicycleForm.jsx

import React, { useState } from "react";
import "./BicycleForm.css";

const BicycleForm = () => {
  const [bicycleInfo, setBicycleInfo] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
    additionalDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only numbers and '.' in the price field
    if (name === "price" && !/^\d*\.?\d*$/.test(value)) {
      return;
    }

    setBicycleInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log("Form submitted:", bicycleInfo);
  };

  return (
    <div className="bicycle-form-container">
      <h2>Sell Your Bicycle</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Brand:
          <input
            type="text"
            name="brand"
            value={bicycleInfo.brand}
            onChange={handleChange}
            placeholder="Enter brand"
            required
          />
        </label>
        <label>
          Model:
          <input
            type="text"
            name="model"
            value={bicycleInfo.model}
            onChange={handleChange}
            placeholder="Enter model"
            required
          />
        </label>
        <label>
          Year:
          <input
            type="text"
            name="year"
            value={bicycleInfo.year}
            onChange={handleChange}
            placeholder="Enter year"
            required
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={bicycleInfo.price}
            onChange={handleChange}
            placeholder="Enter price (numbers and '.')"
            required
          />
        </label>
        <label>
          Additional Details (optional):
          <textarea
            name="additionalDetails"
            value={bicycleInfo.additionalDetails}
            onChange={handleChange}
            rows="4"
            placeholder="Enter additional details"
          />
        </label>
        <label>
          Bicycle Image:
          <input type="file" name="bicycleImage" accept="image/*" required />
        </label>
        <label>
          Legal Ownership Document:
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

export default BicycleForm;
