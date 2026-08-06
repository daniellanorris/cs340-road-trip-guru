import { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { getPlaces, getAttractions, getRoadTrippers, getRoadTripRoutes, getTripBudgets, getRoadTripPlaces } from '../../lib/api.js'

const fetchMap = {
    attractions: getAttractions,
    places: getPlaces,
    roadTrippers: getRoadTrippers,
    roadTripRoutes: getRoadTripRoutes,
    tripBudgets: getTripBudgets,
    roadTripPlaces: getRoadTripPlaces,
}

export default function RecordsTable({ recordType, onEdit, onDelete }) {
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

    // data columns generated from db

    const dataColumns = Object.keys(rows[0]).map((col) => ({
        field: col,
        headerName: col,
        flex: 1,
    }))

    // action column contains edit and delete actions
    const actionColumn = {

        field: 'actions',
        headerName: 'Actions',
        flex: 1,
        sortable: false,
        filterable: false,
        renderCell: (params) => (
            <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                    size="small"
                    variant="outlined"
                    onClick={() => onEdit?.(params.row)}
                >
                    Edit
                </Button>
                <Button
                    size="small"
                    variant="outlined"
                    color="error"
                    onClick={() => onDelete?.(params.row)}
                >
                    Delete
                </Button>
            </Box>
        ),
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={[...dataColumns, actionColumn]}
                getRowId={(row) => row[Object.keys(row)[0]]}
                showToolbar
            />
        </div>
    )
}