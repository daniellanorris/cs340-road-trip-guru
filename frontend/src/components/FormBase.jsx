import { useEffect, useState } from 'react';
import './FormBase.css';
import CloseIcon from '@mui/icons-material/Close';
import PlaceOptions from './Options/PlaceOptions';
import RoadTripOptions from './Options/RoadTripOptions';
import RoadTripperOptions from './Options/RoadTripperOptions';

export default function FormBase({
    message,
    recordList,
    onSubmit,
    onClose,
    rowData,
    submitLabel = "Submit",
    viewForm = false
}) {
    const [formData, setFormData] = useState(rowData || {});

    useEffect(() => {
        if (rowData) {
            setFormData({
                ...rowData,
                road_trip_id: rowData.road_trip_id?.toString() || "",
                place_id: rowData.place_id?.toString() || "",
                road_tripper_id: rowData.road_tripper_id?.toString() || "",
                stop_order: rowData.stop_order?.toString() || ""
            });
        }
    }, [rowData]);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        console.log("FORM DATA:", formData);

        await onSubmit?.(formData);
    }

    function formatLabel(key) {
        return key
            .replace(/_/g, ' ')
            .replace(/\b\w/g, char => char.toUpperCase());
    }

    return (
        <div className="form-card">

            <div className="form-header">
                <h2 className="form-title">
                    {submitLabel}
                </h2>

                <button
                    type="button"
                    className="close-button"
                    onClick={onClose}
                    aria-label="Close form"
                >
                    <CloseIcon />
                </button>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-fields">

                    {Object.entries(recordList).map(([key, type]) => (
                        <div className="form-field" key={key}>

                            <label
                                htmlFor={key}
                                className="form-label"
                            >
                                {formatLabel(key)}
                            </label>

                            {key === "place_id" ? (
                                <PlaceOptions
                                    name={key}
                                    value={formData[key] || ""}
                                    onChange={handleChange}
                                    disabled={viewForm}
                                />
                            ) : key === "road_trip_id" ? (
                                <RoadTripOptions
                                    name={key}
                                    value={formData[key] || ""}
                                    onChange={handleChange}
                                    disabled={viewForm}
                                />
                            ) : key === "road_tripper_id" ? (
                                <RoadTripperOptions
                                    name={key}
                                    value={formData[key] || ""}
                                    onChange={handleChange}
                                    disabled={viewForm}
                                />
                            ) : (
                                <input
                                    id={key}
                                    name={key}
                                    type={
                                        type === Number
                                            ? "number"
                                            : type === Date
                                                ? "date"
                                                : "text"
                                    }
                                    value={formData[key] || ""}
                                    onChange={handleChange}
                                    className="form-input"
                                    disabled={viewForm}
                                />
                            )}

                        </div>
                    ))}

                    {/* Disabling form submit when form is view only */}
                    {!viewForm && (
                        <button
                            type="submit"
                            className="submit-button"
                        >
                            {submitLabel}
                        </button>
                    )}

                    {message && (
                        <div
                            className={`form-message ${message.startsWith("Error")
                                ? "error"
                                : "success"
                                }`}
                        >
                            {message}
                        </div>
                    )}

                </div>
            </form>
        </div>
    );
}