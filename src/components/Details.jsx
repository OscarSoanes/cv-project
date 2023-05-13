import { Input } from "./Input"
import Picker from "react-datepicker"
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export function Details({dataKey, inputs, inputHandler, removeHandler}) {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            {inputs.map((input) => {
                if (input.id.includes("Date")) {
                    return (<Picker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        />)
                }
                return <Input></Input>
            })}       

            <button onClick={() => removeHandler(dataKey)}>Remove</button>
        </div>
    )
}