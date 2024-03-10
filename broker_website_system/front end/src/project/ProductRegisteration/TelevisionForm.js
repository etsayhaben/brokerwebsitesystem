// TelevisionForm.js

import React, { useState } from "react";
import "./TelevisionForm.css";

const TelevisionForm = () => {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    screenSize: "",
    resolution: "",
    price: "",
    additionalDetails: "",
    tvImage: null,
    ownershipDocument: null,
  });

  const screenSizes = [
    "14 inches",
    "21 inches",
    "32 inches",
    "40 inches",
    "50 inches",
    "55 inches",
    "65 inches",
    "75 inches",
  ];

  const availableResolutions = [
    "1920x1080",
    "3840x2160",
    "2560x1440",
    "1366x768",
    "1280x720",
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // Handle file inputs separately
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      // Validating the Price field to accept only numbers and the dot symbol
      if (name === "price" && !/^\d*\.?\d*$/.test(value)) {
        return;
      }

      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to the server or perform other actions
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="television-form-container">
      <h2>Television Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Brand:
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Model:
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Screen Size:
          <select
            name="screenSize"
            value={formData.screenSize}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Screen Size
            </option>
            {screenSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </label>
        <label>
          Resolution:
          <select
            value={formData.resolution}
            onChange={handleChange}
            name="resolution"
            required
          >
            <option value="" disabled>
              Select Resolution
            </option>
            {availableResolutions.map((resolution) => (
              <option key={resolution} value={resolution}>
                {resolution}
              </option>
            ))}
          </select>
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            pattern="^\d*\.?\d*$"
            placeholder="Only numbers and '.' allowed"
            required
          />
        </label>
        <label>
          Additional Details:
          <textarea
            name="additionalDetails"
            value={formData.additionalDetails}
            onChange={handleChange}
            placeholder="Add more detailed information about the TV (optional)"
          />
        </label>
        <label>
          TV Image:
          <input
            type="file"
            name="tvImage"
            onChange={handleChange}
            accept="image/*"
            required
          />
        </label>
        <label>
          Ownership Document:
          <input
            type="file"
            name="ownershipDocument"
            onChange={handleChange}
            accept=".pdf,.doc,.docx"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TelevisionForm;
