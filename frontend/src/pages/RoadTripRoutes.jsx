
import Crud from "../components/Crud"
import Table from "../components/Table"

export default function RoadTripRoutes() {

    return (
        <>
            <h1> RoadTripRoutes</h1>
            <p> Represents a road trip route that helps users organize their planned trips, destinations, and travel information. The start_date and end_date attributes can be NULL because users may create a route before finalizing their travel schedule. Additionally, users may not want to declare these dates when creating the road trip, as they may not know the exact dates that work with their schedule until later on.</p>
            <Crud entityType="roadTripRoutes"></Crud>
            <Table recordType="roadTripRoutes"></Table>
        </>
    )
}