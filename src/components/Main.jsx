import { useState } from "react";
import uniqid from "uniqid";

import defaultData from "../default.json";
import workExpData from "../workExp.json";
import educationData from "../education.json";

import { Edit } from "./editSection/Edit";
import { Preview } from "./previewSection/Preview";

import { formatPhoneNumberIntl } from 'react-phone-number-input'

export function Main() {
    const [data, setData] = useState(defaultData);


    function changeField(event) {
        const toUpd = {...data};
        const target = event.target.getAttribute("id");
        toUpd[target] = event.target.value;
        
        setData(toUpd);
        console.log(data);
    }

    function changePhoneNumber(value) {
        const toUpd = {...data};
        value = formatPhoneNumberIntl(value);
        toUpd.phone = value;

        setData(toUpd);
    }

    function addWorkExperience() {
        const toUpd = {...data};
        const length = data.workExperience.length

        const workExp = {...workExpData};
        workExp.id = uniqid();

        toUpd.workExperience[length] = workExp;

        setData(toUpd);
    }

    function addEducation() {
        const toUpd = {...data};
        const length = data.education.length;

        const education = {...educationData};
        education.id = uniqid();

        toUpd.education[length] = education;
        
        setData(toUpd);
    }

    function changeArrayField(event, targetId, targetArray) {
        const toUpd = {...data};
        const field = toUpd[targetArray].find(field => field.id === targetId);

        const target = event.target.getAttribute("id");
        field[target] = event.target.value;

        setData(toUpd);
    }

    function removeArrayAtID(targetId, targetArray) {
        const toUpd = {...data};
        const removedId = toUpd[targetArray].filter(field => field.id !== targetId);

        toUpd[targetArray] = removedId;
        setData(toUpd);
    }

    function changeDateField(targetId, type, value, targetArray) {
        const toUpd = {...data};
        const target = toUpd[targetArray].find(exp => exp.id === targetId);

        target[type] = value;
        setData(toUpd);

    }

    return (
        <main className="my-3 grid gap-16 lg:grid-cols-2">
            <Edit   changeField={changeField} addWorkExperience={addWorkExperience} data={data} 
                    changeArrayField={changeArrayField} removeArrayAtID={removeArrayAtID} changeDateField={changeDateField} 
                    addEducation={addEducation} changePhoneNumber={changePhoneNumber}/>
            <Preview data={data} />
        </main>
    )
}