// View form, reusable across all entities

import FormBase from "./FormBase";

export default function View({
    row,
    recordList,
    onClose
}) {
    return (
        <FormBase
            rowData={row}
            recordList={recordList}
            submitLabel="View Details"
            onClose={onClose}
            viewForm={true}
        />
    );
}