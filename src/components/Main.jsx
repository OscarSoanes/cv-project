import { useState } from "react";
import uniqid from "uniqid";

import defaultData from "../default.json";
import workExpData from "../workExp.json";

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

    function changeWorkExperience(event, targetId) {
        const toUpd = {...data};
        const experience = toUpd.workExperience.find(exp => exp.id === targetId);

        const target = event.target.getAttribute("id");
        experience[target] = event.target.value;

        setData(toUpd);
    }

    function removeWorkExperience(targetId) {
        console.log("removed");
        const toUpd = {...data};
        const removedId = toUpd.workExperience.filter(exp => exp.id !== targetId);

        toUpd.workExperience = removedId;
        setData(toUpd);
    }

    return (
        <main>
            <Edit changeField={changeField} addWorkExperience={addWorkExperience} workExp={data.workExperience} changeWorkExp={changeWorkExperience} removeWorkExp={removeWorkExperience}/>
            <h2>Preview</h2>
        </main>
    )
}