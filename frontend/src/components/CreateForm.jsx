import FormBase from '../components/FormBase'
import { useState } from 'react'

const BASE_URL = `http://classwork.engr.oregonstate.edu:${import.meta.env.VITE_BACKEND_PORT}`

export default function Create({ recordList, onClose }) {
    const [message, setMessage] = useState("")


    async function postUser(data) {
        try {
            const response = await fetch(`${BASE_URL}/insert-roadtripper`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: data.username,
                    email: data.email,
                })
            })
            const result = await response.json()

            if (!response.ok) {
                setMessage(`Error: ${result.error}`)
            } else {
                setMessage(result.message)
            }
        } catch (error) {
            console.error(error)
            setMessage("Error: Could not connect to server")
        }
    }

    function handleClose() {
        setMessage("")
        onClose?.()
    }

    return (
        <FormBase
            title="Create a record"
            recordList={recordList}
            submitLabel="Create"
            onClose={handleClose}
            onSubmit={(data) => postUser(data)}
            message={message}
        />
    )
}