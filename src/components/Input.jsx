export function Input({id, onChange, prettier, parent, target}) {
    return (
        <>  
            <label htmlFor={id}>{prettier}: </label>
            <input type="text" id={id} placeholder={prettier} onChange={(event) => onChange(event, parent, target)}/>
        </>
    )
}