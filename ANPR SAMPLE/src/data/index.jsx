import React from 'react';
import './VehicleDetails.css';

function VehicleDetails() {
  return (
    <div className="container">
      <h1>Vehicle Number Plate Details</h1>
      <div className="details">
        <div className="detail-item">
          <span className="detail-label">Name: Toyota Innova</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">City: Kochi</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Vehicle Number: KL65H4383</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Chassis Number: ABC123456789DEF</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Vehicle Type: Sedan  </span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Registration Date: 2022-05-15</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Owner:Rahul Sharma</span> 
        </div>
        {/* Add more details as needed */}
      </div>
      <div className="detail-item">
          <span className="detail-label">Make: Toyota</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Model: Corolla</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Color: Silver</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Registration Status: Active</span>
        </div>
      </div>
    
  );
}

export default VehicleDetails;
