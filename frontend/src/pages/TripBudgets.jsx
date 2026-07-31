import Crud from "../components/crud"

export default function TripBudgets() {

    return (
        <>
        <h1> TripBudgets </h1>
        <p> Represents budget information related to a road trip route, allowing users to track overall and daily spending limits. The budget attributes can be NULL because users may create a road trip before deciding their budget. </p>
        <Crud></Crud>
        </>
    )
}