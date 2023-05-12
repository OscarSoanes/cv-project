import { useState } from "react";
import defaultData from "../default.json";
import workExpData from "../workExp.json";

import { Edit } from "./Edit";

export function Main() {
    const [data, setData] = useState(defaultData);
    const [workExpLen, setWorkExpLen] = useState(0);


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
        workExp.id = length;

        toUpd.workExperience[length] = workExp;

        setData(toUpd);
        setWorkExpLen(workExpLen + 1);
    }

    return (
        <main>
            <Edit changeField={changeField} addWorkExperience={addWorkExperience} workExpLen={workExpLen}/>
            <h2>Preview</h2>
        </main>
    )
}