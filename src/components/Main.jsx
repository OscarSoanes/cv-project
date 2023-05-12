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

    return (
        <main>
            <Edit changeField={changeField} addWorkExperience={addWorkExperience} workExp={data.workExperience}/>
            <h2>Preview</h2>
        </main>
    )
}