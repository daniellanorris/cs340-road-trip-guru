import { getPlaces } from "../../../lib/api";
import { useState, useEffect } from "react";

export default function PlaceOptions({ name, value, onChange }) {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        async function fetchPlaces() {
            try {
                const data = await getPlaces();
                setPlaces(data);
            } catch (error) {
                console.error("Failed to fetch places:", error);
            }
        }

        fetchPlaces();
    }, []);

    return (
        <select
            id={name}
            name={name}
            value={value || ""}
            onChange={onChange}
            className="form-input"
        >
            <option value="">
                Select a place
            </option>

            {places.map(place => (
                <option
                    key={place.place_id}
                    value={place.place_id}
                >
                    {place.place_name}
                </option>
            ))}
        </select>
    );
}