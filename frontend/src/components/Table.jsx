import { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { getPlaces, getAttractions, getRoadTrippers, getRoadTripRoutes, getTripBudgets, getRoadTripPlaces } from '../../lib/api.js'

const fetchMap = {
    attractions: getAttractions,
    places: getPlaces,
    roadTrippers: getRoadTrippers,
    roadTripRoutes: getRoadTripRoutes,
    tripBudgets: getTripBudgets,
    roadTripPlaces: getRoadTripPlaces,
}

export default function RecordsTable({ recordType }) {
    const [rows, setRows] = useState([])

    useEffect(() => {
        async function fetchData() {
            const fetchFn = fetchMap[recordType]
            if (!fetchFn) return
            const data = await fetchFn()
            setRows(data)
        }
        fetchData()
    }, [recordType])

    if (rows.length === 0) return <p>No records found.</p>

    const columns = Object.keys(rows[0]).map((col) => ({
        field: col,
        headerName: col,
        flex: 1,
    }))

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row[Object.keys(row)[0]]}
                showToolbar
            />
        </div>
    )
}