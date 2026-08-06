import FormBase from '../components/FormBase'

export default function Update({ recordList }) {
    return (
        <FormBase
            title="Update data"
            recordList={recordList}
            submitLabel="Update"
            submitColor="primary"
            onSubmit={(data) => console.log('update', data)}
        />
    )
}