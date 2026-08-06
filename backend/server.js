import express from 'express'
import { db } from './db-connector.js'
import cors from 'cors'
import dotenv from 'dotenv'
import { selectAllAttractions } from './queries/attractions-places.js'


dotenv.config();

const app = express();
const PORT = process.env.BACKEND_PORT;

app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json());

app.get('/attractions', async (req, res) => {
    try {
        const [result] = await db.query('SELECT * FROM Attractions ORDER BY attraction_id')
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})

app.get('/roadTrippers', async (req, res) => {
    try {
        const [result] = await db.query('SELECT * FROM RoadTrippers ORDER BY road_tripper_id')
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})

app.get('/roadTripPlaces', async (req, res) => {
    try {
        const [result] = await db.query('SELECT * FROM RoadTripPlaces ORDER BY road_trip_place_id')
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})

app.get('/roadTripRoutes', async (req, res) => {
    try {
        const [result] = await db.query('SELECT * FROM RoadTripRoutes ORDER BY road_trip_id')
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})

app.get('/places', async (req, res) => {
    try {
        const [result] = await db.query('SELECT * FROM Places ORDER BY place_id')
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})

app.get('/tripBudgets', async (req, res) => {
    try {
        const [result] = await db.query('SELECT * FROM TripBudgets ORDER BY trip_budget_id')
        res.status(200).json(result)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})


app.post('/insert-roadtripper', async (req, res) => {
    try {
        const { username, email } = req.body
        const [result] = await db.query('CALL sp_insert_roadtripper(?, ?)', [username, email])
        res.status(201).json({ message: 'Record created successfully. Refresh page to see row added to table.' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.sqlMessage || error.message })
    }
})

app.post('/reset', async (req, res) => {
    try {
        const [result] = await db.query('CALL sp_reset_road_trip_guru()')
        res.status(200).json({ result, message: "Records successfully reset" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})

app.get('/attractions-places', async (req, res) => {
    try {
        const [result] = await db.query(selectAllAttractions)
        res.status(200).json({ result, message: "Records successfully grabbed" })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
})

app.listen(PORT, function () {
    console.log('Express started on http://classwork.engr.oregonstate.edu:' + PORT + '; press Ctrl-C to terminate.')
})