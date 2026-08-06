import FormBase from '../components/FormBase'

export default function Create({ recordList, onClose }) {
    return (
        <FormBase
            title="Create a record"
            recordList={recordList}
            submitLabel="Create"
            onClose={onClose}
            onSubmit={(data) => console.log(data)}
        />
    )
}