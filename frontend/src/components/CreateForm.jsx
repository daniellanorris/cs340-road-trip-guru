import FormBase from '../components/FormBase'
import { useState } from 'react'
import { postUser } from '../../lib/api'

export default function Create({ recordList, onClose, entityType }) {
    const [message, setMessage] = useState("")

    async function handleSubmit(data) {
        let result

        if (entityType === "roadTrippers") {
            result = await postUser(data)
        }

        else {
            return
        }

        if (result?.error) {
            setMessage(`Error: ${result.error}`)
        } else {
            setMessage(result?.message || "Record created successfully")
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
            onSubmit={handleSubmit}
            message={message}
            entityType={entityType}
        />
    )
}