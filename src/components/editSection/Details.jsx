import { useState } from "react";

import { Input } from "./Input"
import { DateInput } from "./DateInput";

import { format } from "date-fns";
import { ButtonSecondary } from "./ButtonSecondary";
import { TextAreaInput } from "./TextAreaInput";

export function Details({dataKey, inputs, inputHandler, removeHandler, setDate, target, index}) {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

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
        <section className="my-4">
            <h4>Section {index+1}</h4>
            {inputs.map((input) => {
                if (input.id.includes("startDate")) {
                    return (<DateInput  key={input.id} selectedDate={startDate}
                                        changeDate={changeDate} placeholderText="Start Date" id="startDate" />)

                } else if (input.id.includes("endDate")) {
                    return (<DateInput  key={input.id} selectedDate={endDate} 
                                        changeDate={changeDate} placeholderText="End Date" id="endDate" 
                                        minDate={startDate} />)
                } else if (input.id.includes("description")) {
                    return <TextAreaInput key={input.id} id={input.id} onChange={inputHandler} prettier={input.prettier} parent={dataKey} target={target}></TextAreaInput>
                }

                return <Input key={input.id} id={input.id} onChange={inputHandler} prettier={input.prettier} parent={dataKey} target={target}></Input>
            })}       

            <ButtonSecondary onClick={() => removeHandler(dataKey, target)} text="Remove" />
        </section>
    )
}