import { Input } from "./Input"
import Picker from "react-datepicker"
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export function Details({dataKey, inputs, inputHandler, removeHandler, setDate}) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    function changeDate(date, type) {
        console.log(date);
        if (type === "startDate") {
            setStartDate(date);
        } else {
            setEndDate(date);
        }
        
        setDate(dataKey, type, date);
    } 

    return (
        <div>
            {inputs.map((input) => {
                if (input.id.includes("startDate")) {
                    return (<Picker
                        key={input.id}
                        selected={startDate}
                        onChange={(date) => changeDate(date, "startDate")}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        showIcon
                        />)
                } else if (input.id.includes("endDate")) {
                    return (<Picker
                        key={input.id}
                        selected={endDate}
                        minDate={startDate}
                        onChange={(date) => changeDate(date, "endDate")}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        showIcon
                        />)
                }
                return <Input key={input.id} id={input.id} onChange={inputHandler} prettier={input.prettier} parent={dataKey}></Input>
            })}       

            <button onClick={() => removeHandler(dataKey)}>Remove</button>
        </div>
    )
}