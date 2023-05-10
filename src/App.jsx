import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=75d4b14c&app_key=e3efd741255197c47277804ef31a76f3&results_per_page=20&what=${position}&where=${city}`
    );

    setSalary(response.data.results[0].salary_min);
  };

  return (
    <div className="container">
      <h1 style={{color: 'white'}}>Salary Lookup</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="city" style={{color: 'white'}}>City:</label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor= "position" style={{color: 'white'}}>Position:</label>
          <input
            type="text"
            className="form-control"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      {salary && (
        <div className="mt-4">
          <h3 style={{color: 'white'}}>Salary Information</h3>
          <p style={{color: 'white'}}>Minimum salary: ${salary}</p>
        </div>
      )}
    </div>
  );
}

export default App;
