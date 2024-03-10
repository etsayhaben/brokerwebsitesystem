// MotorBicycleForm.jsx

import React, { useState } from "react";
import "./MotorBicycleForm.css";

const MotorBicycleForm = () => {
  const [motorBicycleInfo, setMotorBicycleInfo] = useState({
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

    setMotorBicycleInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log("Form submitted:", motorBicycleInfo);
  };

  return (
    <div className="motor-bicycle-form-container">
      <h2>Sell Your Motor Bicycle</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Brand:
          <input
            type="text"
            name="brand"
            value={motorBicycleInfo.brand}
            onChange={handleChange}
            placeholder="Enter brand"
          />
        </label>
        <label>
          Model:
          <input
            type="text"
            name="model"
            value={motorBicycleInfo.model}
            onChange={handleChange}
            placeholder="Enter model"
          />
        </label>
        <label>
          Year:
          <input
            type="text"
            name="year"
            value={motorBicycleInfo.year}
            onChange={handleChange}
            placeholder="Enter year"
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={motorBicycleInfo.price}
            onChange={handleChange}
            placeholder="Enter price (numbers and '.')"
          />
        </label>
        <label>
          Additional Details (optional):
          <textarea
            name="additionalDetails"
            value={motorBicycleInfo.additionalDetails}
            onChange={handleChange}
            rows="4"
            placeholder="Enter additional details"
          />
        </label>
        <label>
          Motor Bicycle Image:
          <input type="file" name="motorBicycleImage" accept="image/*" />
        </label>
        <label>
          Legal Ownership Document:
          <input
            type="file"
            name="ownershipDocument"
            accept=".pdf, .doc, .docx"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MotorBicycleForm;
