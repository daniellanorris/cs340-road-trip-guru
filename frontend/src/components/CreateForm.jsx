import FormBase from '../components/FormBase'

export default function Create({ recordList }) {
    return (
        <FormBase
            title="Create a record"
            recordList={recordList}
            submitLabel="Create"
            submitColor="primary"
            onSubmit={(data) => console.log('create', data)}
        />
    )
}