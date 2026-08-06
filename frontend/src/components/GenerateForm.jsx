import FormBase from '../components/FormBase'

export default function Generate({ recordList }) {
    return (
        <FormBase
            title="Generate data"
            recordList={recordList}
            submitLabel="Generate"
            submitColor="secondary"
            onSubmit={(data) => console.log('generate', data)}
        />
    )
}