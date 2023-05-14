export function TextAreaInput({id, prettier, onChange, parent, target, rows}) {
    return (
        <>
            <label className="hidden" htmlFor={id}>{prettier}: </label>
            <textarea rows={rows} className="input resize-none" type="text" id={id} placeholder={prettier} onChange={(event) => onChange(event, parent, target)}/>
        </>
    )
}