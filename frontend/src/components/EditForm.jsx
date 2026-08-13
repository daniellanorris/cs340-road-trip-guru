// Edit form, reusable across all entities

import FormBase from "./FormBase";
import { editRoadTripPlaces } from "../../lib/api";
import { useState } from "react";

export default function Edit({
    row,
    recordList,
    entityType,
    onClose
}) {
    const [message, setMessage] = useState("");

    async function handleSubmit(data) {
        console.log("EDIT DATA:", data);

        let result;

        if (entityType === "roadTripPlaces") {
            result = await editRoadTripPlaces({
                road_trip_place_id: row.road_trip_place_id,
                road_trip_id: data.road_trip_id,
                place_id: data.place_id,
                stop_order: data.stop_order
            });
        }

        if (result?.error) {
            setMessage(`Error: ${result.error}`);
        } else {
            setMessage(
                result?.message || "Record updated successfully"
            );
        }
    }

    return (
        <FormBase
            rowData={row}
            recordList={recordList}
            submitLabel="Edit"
            onClose={onClose}
            onSubmit={handleSubmit}
            message={message}
            className={'card'}
        />
    );
}