import { useState } from "react";
import defaultData from "../default.json";
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

    return (
        <main>
            <Edit changeField={changeField}/>
            <h2>Preview</h2>
        </main>
    )
}