import React, { useState } from 'react';
import './TrackShipmentPage.css';
import SearchIcon from '../assets/icons8-search.svg';


const TrackShipmentPage = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a request to the Bosta API to fetch tracking information based on trackingNumber
      const response = await fetch(`https://tracking.bosta.co/shipments/track/${trackingNumber}`);
      if (!response.ok) {
        throw new Error('Failed to fetch tracking information.');
      }
      const data = await response.json();
      setTrackingInfo(data);
    } catch (error) {
      setError('Error fetching tracking information. Please try again later.');
    }
  };
  const { provider, CurrentStatus, PromisedDate, TrackingNumber } = trackingInfo;

  return (
    <div className="container">
      <h2>Track Your Order</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder="Enter Tracking Number"
        />
        <button className="track-shipment-button" type="submit">
          <img src={SearchIcon} alt="Search" />
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {trackingInfo && (
        <div className="tracking-info">
          <h3>Tracking Information</h3>
          <div className="tracking-info-box">
            <div className="tracking-info-item">
              <p><strong>Tracking Number:</strong></p>
              <p>{TrackingNumber}</p>
            </div>
            <div className="tracking-info-item">
              <p><strong>Current Status:</strong></p>
              <p>{CurrentStatus.state}</p>
            </div>
            <div className="tracking-info-item">
              <p><strong>Timestamp:</strong></p>
              <p>{CurrentStatus.timestamp}</p>
            </div>
            <div className="tracking-info-item">
              <p><strong>Provider:</strong></p>
              <p>{provider}</p>
            </div>
            <div className="tracking-info-item">
              <p><strong>Promised Date:</strong></p>
              <p>{PromisedDate}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
};


export default TrackShipmentPage;