// Express library used to create a web server that will listen and respond to API calls from the frontend
import express from 'express'
import { db } from './db-connector.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config();


const MY_ONID = process.env.OSU_ID

// Instantiate an express object to interact with the server
const app = express();

// Set a port in the range: 1024 < PORT < 65535
const PORT = process.env.BACKEND_PORT;


// If on FLIP or classwork, use cors() middleware to allow cross-origin requests from the frontend with your port number:
// EX (local): http://localhost:5173
// EX (FLIP/classwork) http://classwork.engr.oregonstate.edu:5173
app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json()); // this is needed for post requests, good thing to know

app.get('/attractions', async (req, res) => {
    const attractionQuery = `SELECT *
FROM Attractions
ORDER BY attraction_id;`

    const [result] = await db.query(attractionQuery)
    res.status(200).json(result)
    console.log(result)
})

app.get('/roadTrippers', async (req, res) => {
    const attractionQuery = `SELECT *
FROM RoadTrippers
ORDER BY road_tripper_id;`

    const [result] = await db.query(attractionQuery)
    res.status(200).json(result)
    console.log(result)
})

app.get('/roadTripPlaces', async (req, res) => {
    const attractionQuery = `SELECT *
FROM RoadTripPlaces
ORDER BY road_trip_place_id;`

    const [result] = await db.query(attractionQuery)
    res.status(200).json(result)
    console.log(result)
})

app.get('/roadTripRoutes', async (req, res) => {
    const attractionQuery = `SELECT *
FROM RoadTripRoutes
ORDER BY road_trip_id;`

    const [result] = await db.query(attractionQuery)
    res.status(200).json(result)
    console.log(result)
})

app.get('/places', async (req, res) => {
    const attractionQuery = `SELECT *
FROM Places
ORDER BY place_id;`

    const [result] = await db.query(attractionQuery)
    res.status(200).json(result)
    console.log(result)
})

app.get('/tripBudgets', async (req, res) => {
    const attractionQuery = `SELECT *
FROM TripBudgets
ORDER BY trip_budget_id;`

    const [result] = await db.query(attractionQuery)
    res.status(200).json(result)
    console.log(result)
})


// Tell express what port to listen on 
app.listen(PORT, function () {
    console.log('Express started on http://classwork.engr.oregonstate.edu:' + PORT + '; press Ctrl-C to terminate.');
});