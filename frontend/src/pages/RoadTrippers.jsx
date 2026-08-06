import Crud from "../components/Crud"
import Table from "../components/Table"

export default function RoadTrippers() {

    return (
        <>
            <h1> RoadTrippers</h1>
            <p> Represents an individual user that the road trip belongs to. A single road tripper can create multiple road trips.</p>
            <Crud entityType="roadTrippers"></Crud>
            <Table recordType="roadTrippers"></Table>
        </>
    )
}