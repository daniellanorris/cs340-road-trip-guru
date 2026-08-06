import { useState } from 'react'
import './FormBase.css'
import CloseIcon from '@mui/icons-material/Close';

export default function FormBase({ message, recordList, onSubmit, onClose, submitLabel = "Submit" }) {
    const [formData, setFormData] = useState({})


    function handleChange(event) {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        await onSubmit?.(formData)
        setFormData({})
    }

    return (
        <div style={{
            maxWidth: '500px',
            margin: '2rem auto',
            padding: '1.5rem',
            backgroundColor: '#ffffff',
            color: '#111827',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <CloseIcon
                    onClick={onClose}
                    style={{ cursor: 'pointer', color: '#6b7280' }}
                />
            </div>

            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {Object.entries(recordList).map(([key, type]) => (
                        <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <label htmlFor={key} style={{ color: '#374151', fontSize: '0.875rem' }}>{key}</label>
                            <input
                                id={key}
                                name={key}
                                type={
                                    type === Number ? "number"
                                        : type === Date ? "date"
                                            : "text"
                                }
                                value={formData[key] || ""}
                                onChange={handleChange}
                                style={{
                                    padding: '8px 12px',
                                    fontSize: '1rem',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '4px',
                                    backgroundColor: '#ffffff',
                                    color: '#111827',
                                }}
                            />
                        </div>
                    ))}
                    <button
                        type="submit"
                        style={{
                            padding: '10px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            backgroundColor: '#1976d2',
                            color: '#ffffff',
                        }}
                    >
                        {submitLabel}
                    </button>

                    {message && (
                        <div style={{
                            padding: '8px 12px',
                            borderRadius: '4px',
                            backgroundColor: message.includes('Error') ? '#fee2e2' : '#dcfce7',
                            color: message.includes('Error') ? '#991b1b' : '#166534',
                            fontSize: '0.875rem',
                        }}>
                            {message}
                        </div>
                    )}
                </div>
            </form>
        </div>
    )
}