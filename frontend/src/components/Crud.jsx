import './Crud.css'
import { useState } from 'react'
import Create from './CreateForm'
import Edit from './EditForm'

import {
    roadTrippers,
    roadTripPlaces,
    roadTripRoutes,
    attractions,
    places,
    tripBudgets
} from '../types/data'

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

    function handleClose() {
        setIsOpen("")
    }

    return (
        <>
            <div className="crud-container">

                {isReset ? (
                    <button
                        className="crud-button delete"
                        onClick={onReset}
                    >
                        Reset all records
                    </button>
                ) : (
                    <>
                        <button
                            onClick={() => setIsOpen("create")}
                            className="crud-button create"
                        >
                            Create Record
                        </button>

                    </>
                )}

            </div>

            {isOpen === "create" && (
                <Create
                    recordList={data}
                    entityType={entityType}
                    onClose={handleClose}
                />
            )}

            {isOpen === "edit" && (
                <Edit
                    recordList={data}
                    entityType={entityType}
                    onClose={handleClose}
                />
            )}
        </>
    )
}