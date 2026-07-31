import './Crud.css';

export default function Crud() {
    return (
        <div className="crud-container">
            <button className="crud-button generate">
                Generate Table
            </button>

            <button className="crud-button create">
                Create Record
            </button>

            <button className="crud-button update">
                Update Record
            </button>

            <button className="crud-button delete">
                Delete Record
            </button>
        </div>
    );
}