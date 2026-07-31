
import { useState } from "react";
export default function Update({recordList}) {

    const [formData, setFormData] = useState({});

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <>
            <h2> Update data </h2>
                      <form >
                {Object.entries(recordList).map(([key, type]) => (

                    <div key={key}>

                        <label htmlFor={key}>
                            {key}
                        </label>

                        <input
                            id={key}
                            name={key}
                            type={
                                type === Number
                                    ? "number"
                                    : type === Date
                                        ? "date"
                                        : "text"
                            }
                            value={formData[key] || ""}
                            onChange={handleChange}
                        />

                    </div>

                ))}


                <button type="submit">Submit</button>
            </form>
        </>

    )

}