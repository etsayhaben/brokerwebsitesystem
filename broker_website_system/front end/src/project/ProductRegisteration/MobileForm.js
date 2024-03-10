// MobileForm.js
import { useLocation,useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory
import React, { useState } from 'react';
import axios from "axios";
import "./Mobileform.css";
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import Header from '../Header';

const MobileForm = () => {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    storage: "",
    color: "",
    condition: "",
    price: "",
    additionalInfo: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [isSubmitted,setSubmitted]=useState(null);
  const [ownershipFile, setOwnershipFile] = useState(null);
  const [imageFileError, setImageFileError] = useState("");
  const [ownershipFileError, setOwnershipFileError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setImageFile(selectedFile);
    setImageFileError("");
  };

  const handleOwnershipFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setOwnershipFile(selectedFile);
    setOwnershipFileError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if image file is provided
    if (!imageFile) {
      setImageFileError("Please choose an image file.");
      return;
    }

    // Check if legal ownership document file is provided
    if (!ownershipFile) {
      setOwnershipFileError("Please choose a legal ownership document file.");
      return;
    }

    // Prepare form data for submission
    const formDataToSend = new FormData();
    formDataToSend.append("brand", formData.brand);
    formDataToSend.append("model", formData.model);
    formDataToSend.append("storage", formData.storage);
    formDataToSend.append("color", formData.color);
    formDataToSend.append("condition", formData.condition);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("additionalInfo", formData.additionalInfo);
    formDataToSend.append("imageFile", imageFile);
    formDataToSend.append("ownershipFile", ownershipFile);


    try {
      // Make an HTTP POST request to the backend using Axios
      const response = await axios.post("http://localhost:8000/submitform", formDataToSend);

      if (response.status === 200) {
        // Reset the form after successful submission
        setFormData({
          brand: "",
          model: "",
          storage: "",
          color: "",
          condition: "",
          price: "",
          additionalInfo: "",
        });
        setImageFile(null);
        setOwnershipFile(null);
        setImageFileError("");
        setOwnershipFileError("");
        setSubmitError("");
        setSubmitted(true);
        // navigate('/');
    } else {
        // Handle server-side errors
        setSubmitError("Error submitting the form. Please try again.");
      }
    } catch (error) {
      // Handle network errors
      setSubmitError("Network error. Please try again.");
    }
  };

  return (
    <div>
      <Header/>
    <div className="mobile-form-container">
      <h2> Mobile Phone Information Form</h2>
      <form onSubmit={handleSubmit}>
        {/* ... (existing form content) */}
        


<div className="form-row">
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
        </div>

        <div className="form-row">
          <label>
            Storage Capacity:
            <input
              type="text"
              name="storage"
              value={formData.storage}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Color:
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Condition:
            <input
              type="text"
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Price:
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Additional Information (Optional):
            <input
              type="text"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Upload an Image:
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {imageFileError && (
              <p className="error-message">{imageFileError}</p>
            )}
          </label>
        </div>

        <div className="form-row">
          <label>
            Legal Ownership Document:
            <div className="file-input-container">
              <input
                type="file"
                accept=".pdf, .doc, .docx"
                onChange={handleOwnershipFileChange}
              />
              <span className="file-input-label">Choose file</span>
            </div>
            {ownershipFileError && (
              <p className="error-message">{ownershipFileError}</p>
            )}
          </label>
        </div>

        {submitError && <p className="error-message">{submitError}</p>}
        {isSubmitted && <p className="successed">
          we will notify you soon
          {navigate('/')}
        </p>
        }

        <div className="form-row">
          <button type="submit">Submit</button>
        </div>

        

      </form>
    </div>
    </div>

  );
};

export default MobileForm;

