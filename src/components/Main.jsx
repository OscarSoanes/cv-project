import { useState } from "react";
import defaultData from "../default.json";
import { Edit } from "./Edit";

export function Main() {
    const [data, setData] = useState(defaultData);

    function setName(event) {
        const toUpd = {...data};
        toUpd.name = event.target.value;
        
        setData(toUpd)
        console.log(data);
    }

    return (
        <main>
            <Edit setName={setName}/>
            <h2>Preview</h2>
        </main>
    )
}