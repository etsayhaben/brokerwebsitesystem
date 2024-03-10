// LaptopForm.js
import React, { useState } from "react";
import "./LaptopForm.css";

const LaptopForm = () => {
  const [laptopInfo, setLaptopInfo] = useState({
    brand: "",
    model: "",
    processor: "",
    ram: "",
    storage: "",
    price: "",
    condition: "",
    additionalInfo: "",
    laptopImage: null,
    ownershipDocument: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setLaptopInfo((prevInfo) => ({
      ...prevInfo,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle the submitted laptop information
    console.log("Submitted Laptop Information:", laptopInfo);
  };

  return (
    <div className="laptop-form-container">
      <h2>Sell Your Laptop</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Brand:
          <input
            type="text"
            name="brand"
            value={laptopInfo.brand}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Model:
          <input
            type="text"
            name="model"
            value={laptopInfo.model}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Processor:
          <input
            type="text"
            name="processor"
            value={laptopInfo.processor}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          RAM:
          <input
            type="text"
            name="ram"
            value={laptopInfo.ram}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Storage:
          <input
            type="text"
            name="storage"
            value={laptopInfo.storage}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={laptopInfo.price}
            onChange={handleChange}
            min="0"
            required
          />
        </label>
        <label>
          Condition:
          <select
            name="condition"
            value={laptopInfo.condition}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Condition
            </option>
            <option value="new">New</option>
            <option value="used">Used</option>
            <option value="dubai-used">Dubai Used</option>
          </select>
        </label>
        <label>
          Additional Information (Optional):
          <textarea
            name="additionalInfo"
            value={laptopInfo.additionalInfo}
            onChange={handleChange}
          />
        </label>
        <label>
          Laptop Image:
          <input
            type="file"
            name="laptopImage"
            onChange={handleChange}
            accept="image/*"
          />
        </label>
        <label>
          Ownership Document:
          <input
            type="file"
            name="ownershipDocument"
            onChange={handleChange}
            accept=".pdf,.doc,.docx"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LaptopForm;
