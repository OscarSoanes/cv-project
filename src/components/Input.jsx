export function Input({type, onChange}) {
    return (
        <>
            <input type="text" id={type} placeholder={type} onChange={onChange}/>
        </>
    )
}