import './Crud.css';

import { useState } from 'react';

import Generate from './GenerateForm';
import Update from './UpdateForm';
import Create from './CreateForm';
import Delete from './DeleteForm';

import {
    roadTrippers,
    roadTripPlaces,
    roadTripRoutes,
    attractions,
    places,
    tripBudgets
} from '../types/data';

export default function Crud({ entityType }) {

    const [isOpen, setIsOpen] = useState("");

    const entityData = {
        places: places,
        tripBudgets: tripBudgets,
        attractions: attractions,
        roadTripRoutes: roadTripRoutes,
        roadTripPlaces: roadTripPlaces,
        roadTrippers: roadTrippers
    };

    const data = entityData[entityType];
    console.log(data)

    if (!data) {
        console.error(`No entity type found: ${entityType}`);
    }

    function handleOpen(value) {
        setIsOpen(value);
    }

    return (
        <>
            <div className="crud-container">


                <button
                    onClick={() => handleOpen("create")}
                    className="crud-button create"
                >
                    Create Record
                </button>

                <button
                    onClick={() => handleOpen("update")}
                    className="crud-button update"
                >
                    Update Record
                </button>

                <button
                    onClick={() => handleOpen("delete")}
                    className="crud-button delete"
                >
                    Delete Record
                </button>

            </div>

            <div className="form-container">

                {isOpen === "generate" && (
                    <Generate recordList={data} />
                )}

                {isOpen === "create" && (
                    <Create recordList={data} />
                )}

                {isOpen === "update" && (
                    <Update recordList={data} />
                )}

                {isOpen === "delete" && (
                    <Delete recordList={data} />
                )}

            </div>
        </>
    );
}