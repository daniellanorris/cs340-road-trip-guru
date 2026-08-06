import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

export default function ResetModal({ open, setResetOpen }) {
    return (
        <Modal open={open} onClose={() => setResetOpen(false)}>
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
                    <div className="crud-button create">Yes</div>
                    <div className="crud-button" onClick={() => setResetOpen(false)}>No</div>
                </div>
            </Box>
        </Modal>
    )
}