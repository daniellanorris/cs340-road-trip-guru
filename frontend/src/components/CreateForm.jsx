import FormBase from '../components/FormBase'
import { useState } from 'react'

const BASE_URL = `http://classwork.engr.oregonstate.edu:${import.meta.env.VITE_BACKEND_PORT}`

export default function Create({ recordList, onClose, message }) {
    const [message, setMessage] = useState("")

    async function postUser(data) {
        const response = await fetch(`${BASE_URL}/insert-roadtripper`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: data.username,
                email: data.email,
            })
        })
        const result = await response.json()
        console.log(result)
        setMessage({ result })
        return result
    }

    return (
        <FormBase
            title="Create a record"
            recordList={recordList}
            submitLabel="Create"
            onClose={onClose && setMessage("")}
            onSubmit={(data) => postUser(data)}
            message={message}
        />
    )
}