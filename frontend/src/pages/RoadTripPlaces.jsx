import { useState } from "react";
import Crud from "../components/Crud";
import Table from "../components/Table";
import Edit from "../components/EditForm";
import View from "../components/ViewForm"
import {
    deleteRoadTripPlaces,
} from "../../lib/api";

import { roadTripPlaces } from "../types/data";

export default function RoadTripPlaces() {
    const [editingRow, setEditingRow] = useState(null);
    const [viewingRow, setViewingRow] = useState(null);
    const [tableRefresh, setTableRefresh] = useState(0);

    async function handleDelete(row) {
        console.log("Deleting row:", row);

        const result = await deleteRoadTripPlaces({
            road_trip_place_id: row.road_trip_place_id
        });

        if (result.error) {
            alert(result.error);
            return;
        }

        // Tell the table to fetch its data again
        // For citation, prompt: Chat GPT - 'table refresh with props for React'
        setTableRefresh(prev => prev + 1);
    }

    function handleEdit(row) {
        console.log("Editing row:", row);
        setEditingRow(row);
    }

    function handleCloseEdit() {
        setEditingRow(null);
    }

    function handleView(row) {
        setViewingRow(row);
    }

    function handleCloseView() {
        setViewingRow(null)
    }

    return (
        <>
            <h1>RoadTripPlaces</h1>

            <p>
                Represents the association between a road trip and a place,
                as a place can have multiple road trips assigned to it,
                and a road trip can have multiple places along its route.
            </p>

            <Crud entityType="roadTripPlaces" />

            <Table
                recordType="roadTripPlaces"
                onEdit={handleEdit}
                onDelete={handleDelete}
                onView={handleView}
                refreshKey={tableRefresh}
            />

            {editingRow && (
                <Edit
                    row={editingRow}
                    recordList={roadTripPlaces}
                    entityType="roadTripPlaces"
                    onClose={handleCloseEdit}
                />

            )}

            {viewingRow && (
                <View
                    row={viewingRow}
                    recordList={roadTripPlaces}
                    entityType="roadTripPlaces"
                    onClose={handleCloseView}

                />
            )}
        </>
    );
}