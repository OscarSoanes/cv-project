export function Input({id, onChange, prettier, parent, target}) {
    return (
        <>  
            <label className="hidden" htmlFor={id}>{prettier}: </label>
            <input className="input" type="text" id={id} placeholder={prettier} onChange={(event) => onChange(event, parent, target)}/>
        </>
    )
}