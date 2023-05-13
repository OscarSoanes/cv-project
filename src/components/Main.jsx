import { useState } from "react";
import uniqid from "uniqid";

import defaultData from "../default.json";
import workExpData from "../workExp.json";
import educationData from "../education.json";

import { Edit } from "./Edit";

export function Main() {
    const [data, setData] = useState(defaultData);


    function changeField(event) {
        const toUpd = {...data};
        const target = event.target.getAttribute("id");
        toUpd[target] = event.target.value;
        
        setData(toUpd);
        console.log(data);
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
        <main>
            <Edit   changeField={changeField} addWorkExperience={addWorkExperience} data={data} 
                    changeArrayField={changeArrayField} removeArrayAtID={removeArrayAtID} changeDateField={changeDateField} 
                    addEducation={addEducation} />
            <h2>Preview</h2>
        </main>
    )
}