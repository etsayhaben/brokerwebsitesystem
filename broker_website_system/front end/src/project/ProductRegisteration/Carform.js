// src/CarForm.js
import React, { useState } from "react";
import "./Carform.css";

const CarForm = () => {
  const [carInfo, setCarInfo] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    additionalInfo: "",
    carImage: null,
    legalityDocument: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setCarInfo((prevInfo) => ({
      ...prevInfo,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle the submitted car information
    console.log("Submitted Car Information:", carInfo);
  };

  return (
    <div className="car-form-container">
      <h2>Car Information Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Make:
          <input
            type="text"
            name="make"
            value={carInfo.make}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Model:
          <input
            type="text"
            name="model"
            value={carInfo.model}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Year:
          <input
            type="number"
            name="year"
            value={carInfo.year}
            onChange={handleChange}
            min="0"
            required
          />
        </label>
        <label>
          Color:
          <input
            type="text"
            name="color"
            value={carInfo.color}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Additional Information (Optional):
          <textarea
            name="additionalInfo"
            value={carInfo.additionalInfo}
            onChange={handleChange}
          />
        </label>
        <label>
          Car Image:
          <input
            type="file"
            name="carImage"
            onChange={handleChange}
            accept="image/*"
          />
        </label>
        <label>
          Legality Document:
          <input
            type="file"
            name="legalityDocument"
            onChange={handleChange}
            accept=".pdf,.doc,.docx"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CarForm;
