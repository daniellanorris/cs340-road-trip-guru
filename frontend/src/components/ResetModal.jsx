import Modal from '@mui/material/Modal'
import { useState } from 'react'
import Box from '@mui/material/Box'

export default function ResetModal({ open, setResetOpen }) {
    const BASE_URL = `http://classwork.engr.oregonstate.edu:${import.meta.env.VITE_BACKEND_PORT}`

    const [message, setMessage] = useState("")

    async function resetTables() {
        try {
            const response = await fetch(`${BASE_URL}/reset`, {
                method: "POST",
                headers: { "Content-Type": "application/json" }
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
    return (
        <Modal open={open} message={message} onClose={() => setResetOpen(false)}>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#fff',
                color: '#111',
                borderRadius: '8px',
                padding: '2rem',
                minWidth: '300px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center',
            }}>
                <div>Are you sure you want to reset all tables?</div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <div className="crud-button create" onClick={() => resetTables()}>Yes</div>
                    <div className="crud-button" onClick={() => setResetOpen(false)}>No</div>
                </div>
            </Box>
        </Modal>
    )
}