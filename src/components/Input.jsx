export function Input({forType, onChange}) {
    return (
        <>
            <input type="text" id={forType} placeholder={forType} onChange={onChange}/>
        </>
    )
}