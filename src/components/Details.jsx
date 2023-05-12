import { Input } from "./Input"

export function Details({dataKey, inputs, inputHandler, removeHandler}) {
    return (
        <div>
            {inputs.map((input) => 
                <Input key={input.id} id={input.id} onChange={inputHandler} prettier={input.prettier} parent={dataKey}></Input>
            )}

            <button onClick={() => removeHandler(dataKey)}>Remove</button>
        </div>
    )
}