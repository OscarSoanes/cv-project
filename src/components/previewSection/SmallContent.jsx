export function SmallContent({value, icon}) {
    return (
        <div className="flex justify-end gap-1 items-center">
            {icon}
            <p className="text-[2vw] lg:text-[1vw] 2xl:text-[0.75vw]">{value}</p>
        </div>
    )
}