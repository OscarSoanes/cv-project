export function ButtonSecondary({onClick, text}) {
    return (<button onClick={onClick} className="button bg-gray-300 text-slate-800 hover:bg-gray-400">{text}</button>)
}