"use client"

import './App.css';
import {useState, useEffect} from 'react'
import NavBar from './components/navbar';
import { Routes, Route} from 'react-router-dom';
import RoadTripPlaces from './pages/RoadTripPlaces';
import RoadTripRoutes from './pages/RoadTripRoutes';
import TripBudgets from './pages/TripBudgets';
import Places from './pages/Places'
import RoadTrippers from './pages/RoadTrippers';
import Attractions from './pages/Attractions';
import Home from './pages/Home'

// Define the backend port and URL for API requests
const backendPort = 3221;  // Use the port you assigned to the backend server, this would normally go in .env file
const backendURL = `http://classwork.engr.oregonstate.edu:${backendPort}/`;

function App() {

    // Set up a state variable `message` to store and display the backend response
    const [message, setMessage] = useState([]);

    // Get the data from the database
    const getData = async function () {
        if (message.length > 0) return; // Skip if data is already fetched
        try {
            // Make a GET request to the backend
            const response = await fetch(backendURL);
            
            // Convert the response into JSON format
            const rows = await response.json();
            
            // Update the message state with the response data
            setMessage(JSON.stringify(rows));
            
        } catch (error) {
          // If the API call fails, print the error to the console
          console.log(error);
        }
    };

    // Load table on page load
    useEffect(() => {
        getData();
    }, []);

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/road-trippers" element={<RoadTrippers />} />
        <Route path="/road-trip-places" element={<RoadTripPlaces />} />
        <Route path="/road-trip-routes" element={<RoadTripRoutes/>} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/places" element={<Places />} />
        <Route path="/trip-budgets" element={<TripBudgets />} />
      </Routes>

    </>
  );

} export default App;
