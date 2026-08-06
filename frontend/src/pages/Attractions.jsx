import Crud from "../components/Crud"
import Table from "../components/Table"

export default function Attractions() {

    return (
        <>
            <h1> Attractions</h1>
            <p> Represents attractions (interesting shops, geological features, historic sites) that a place may contain.</p>
            <Crud entityType="attractions"></Crud>
            <Table recordType="attractions"></Table>
        </>
    )
}