export function ButtonPrimary({onClick, text}) {
    return (<button onClick={onClick} className="button bg-sky-800 text-slate-100 hover:bg-sky-700">{text}</button>)
}