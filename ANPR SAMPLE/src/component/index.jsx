// ANPRPortal.js
import React, { useState } from 'react';
import './index.css';
import {useNavigate}from 'react-router-dom'

function ANPRPortal() {
  const [imagePreview, setImagePreview] = useState(null);

  const navigate=useNavigate();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch('/upload', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {
          // Redirect to details page upon successful upload
          window.location.href = "./details.html";
        } else {
          throw new Error('Failed to upload image.');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container">
      <h1>ANPR Portal</h1>
      <p>An Automatic Number Plate Recognition (ANPR) system is a technology that uses optical character recognition on images to read vehicle registration plates to get vehicle details.</p>

      <div className="form-wrapper">
        <form id="uploadForm" encType="multipart/form-data" onSubmit={handleSubmit}>
          <input type="file" name="image" accept="image/*" onChange={handleImageChange} required />
          <button type="submit" onClick={()=>navigate("/VehicleDetails")}>Get Details</button>
        </form>
      </div>

      {imagePreview && 
        <div className="preview-image">
          <img src={imagePreview} alt="Image Preview" />
        </div>
      }
    </div>
  );
}

export default ANPRPortal;
