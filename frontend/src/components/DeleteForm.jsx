import FormBase from '../components/FormBase'

export default function Delete({ recordList }) {
    return (
        <FormBase
            title="Delete data"
            recordList={recordList}
            submitLabel="Delete"
            submitColor="error"
            onSubmit={(data) => console.log('delete', data)}
        />
    )
}