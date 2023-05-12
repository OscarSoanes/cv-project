import { useState } from "react";
import defaultData from "../default.json";

export function Main() {
    const [data, setData] = useState(defaultData)

    return (
        <main>
            <h2>Edit</h2>
            <h2>Preview</h2>
        </main>
    )
}