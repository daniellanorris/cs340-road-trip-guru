import './Crud.css';
import { useState } from 'react';
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

const entityData = {
    places,
    tripBudgets,
    attractions,
    roadTripRoutes,
    roadTripPlaces,
    roadTrippers,
}

export default function Crud({ entityType, onReset }) {
    const [isOpen, setIsOpen] = useState("")

    const isReset = entityType === "reset"
    const data = entityData[entityType]

    if (!isReset && !data) {
        console.error(`No entity type found: ${entityType}`)
    }


    return (
        <>
            <div className="crud-container">
                {isReset ? (
                    <button className="crud-button delete" onClick={onReset}>
                        Reset all records
                    </button>
                ) : (
                    <button
                        onClick={() => setIsOpen("create")}
                        className="crud-button create"
                    >
                        Create Record
                    </button>
                )}
            </div>

            <div className="form-container">
                {isOpen === "create" && (
                    <Create recordList={data} entityType={entityType} onClose={() => setIsOpen("")} />
                )}
                {isOpen === "update" && (
                    <Update recordList={data} onClose={() => setIsOpen("")} />
                )}
                {isOpen === "delete" && (
                    <Delete recordList={data} onClose={() => setIsOpen("")} />
                )}
            </div>
        </>
    )
}