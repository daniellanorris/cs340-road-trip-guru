
import Crud from "../components/Crud"

export default function RoadTripPlaces() {

    return (
        <>
        <h1> RoadTripPlaces </h1>
        <p> Represents the association between a road trip and a place, as a place can have multiple road trips assigned to it, and a road trip can have multiple places along its route.</p>
        <Crud entityType="roadTripPlaces"/>
        </>
    )
}