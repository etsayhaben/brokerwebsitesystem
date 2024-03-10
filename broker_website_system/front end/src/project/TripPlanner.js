// TripPlanner.js
import './BodyHomePage.css'
import React, { useState } from 'react';

const TripPlanner = () => {
  const [startLocation, setStartLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [preferences, setPreferences] = useState('');
  const [optimizedRoute, setOptimizedRoute] = useState('');

  const planTrip = async () => {
    try {
      // Mock API endpoint (replace with your actual server endpoint)
      const apiUrl = 'http://localhost:8000/planTrip';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ startLocation, destination, preferences }),
      });

      const data = await response.json();
      setOptimizedRoute(data.optimizedRoute);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Road Trip Planner</h2>
      <div>
        <label>Start Location:</label>
        <input
          type="text"
          value={startLocation}
          onChange={(e) => setStartLocation(e.target.value)}
        />
      </div>
      <div>
        <label>Destination:</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div>
        <label>Preferences:</label>
        <input
          type="text"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        />
      </div>
      <button onClick={planTrip}>Plan Trip</button>
      {optimizedRoute && (
        <div>
          <h3>Optimized Route:</h3>
          <p>{optimizedRoute}</p>
        </div>
      )}
    </div>
  );
};

export default TripPlanner;




