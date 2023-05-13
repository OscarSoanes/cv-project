import { useState } from "react";

import { Input } from "./Input"

import Picker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

export function Details({dataKey, inputs, inputHandler, removeHandler, setDate, target}) {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    function changeDate(date, type) {
        if (type === "startDate") {
            setStartDate(date);
        } else {
            setEndDate(date);
        }

        const formatDate = date ? format(date, "MMM yyyy") : ""
        setDate(dataKey, type, formatDate, target);
    } 

    return (
        <div>
            {inputs.map((input) => {
                if (input.id.includes("startDate")) {
                    return (<Picker
                        key={input.id}
                        selected={startDate}
                        maxDate={new Date()}
                        onChange={(date) => changeDate(date, "startDate")}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        showIcon
                        placeholderText="Start Date"
                        isClearable
                        />)
                } else if (input.id.includes("endDate")) {
                    return (<Picker
                        key={input.id}
                        selected={endDate}
                        minDate={startDate}
                        maxDate={new Date()}
                        onChange={(date) => changeDate(date, "endDate")}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        showIcon
                        placeholderText="End Date"
                        isClearable
                        />)
                }
                return <Input key={input.id} id={input.id} onChange={inputHandler} prettier={input.prettier} parent={dataKey} target={target}></Input>
            })}       

            <button onClick={() => removeHandler(dataKey, "workExperience")}>Remove</button>
        </div>
    )
}