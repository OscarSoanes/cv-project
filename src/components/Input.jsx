export function Input({id, onChange, prettier}) {
    return (
        <>  
            <label htmlFor={id}>{prettier}: </label>
            <input type="text" id={id} placeholder={prettier} onChange={onChange}/>
        </>
    )
}