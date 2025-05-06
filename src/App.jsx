import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [stopId, setStopId] = useState('');
  const [inputStopId, setInputStopId] = useState('');
  const [stopInfo, setStopInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (stopId) {
      fetchStopInfo();
    }
  }, [stopId]);

  const fetchStopInfo = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const apiKey = import.meta.env.VITE_AT_SUBSCRIPTION_PRIMARY_KEY;
      const atApiUrl = `https://api.at.govt.nz/gtfs/v3/stops/${stopId}`;
      
      const response = await fetch(atApiUrl, {
        method: 'GET',
        headers: {
          'Ocp-Apim-Subscription-Key': apiKey
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data && data.data) {
        setStopInfo(data.data.attributes);
      } else {
        setStopInfo(null);
        setError('No stop information found for this ID.');
      }
    } catch (err) {
      setError('Failed to fetch stop information.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStopId(inputStopId);
  };

  return (
    <div className="app">
      <h1>Auckland Transport Stop Info</h1>
      
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="stopId">Bus Stop ID:</label>
        <input
          id="stopId"
          type="text"
          value={inputStopId}
          onChange={(e) => setInputStopId(e.target.value)}
          placeholder="Enter stop ID"
          required
        />
        <button type="submit">Get Info</button>
      </form>

      {error && <p className="error">{error}</p>}
      {loading && <p>Loading...</p>}
      
      {stopInfo && !loading && (
        <div>
          <h2>Stop: {stopInfo.stop_name || 'N/A'}</h2>
          <p>Stop Code: {stopInfo.stop_code || 'N/A'}</p>
          <p>Location: Lat: {stopInfo.stop_lat}, Lon: {stopInfo.stop_lon}</p>
        </div>
      )}
    </div>
  );
}

export default App
