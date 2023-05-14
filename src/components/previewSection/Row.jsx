export function Row({data}) {
    return (
        <section className="border-b border-solid border-black pb-1 text-[1.75vw] lg:text-[1.25vw] 2xl:text-[0.75vw] mb-3">
            <div className="flex justify-between items-center">
                <h4 className="font-bold text-[2vw] lg:text-[1.5vw] 2xl:text-[1vw]">{data.position || data.course} </h4>

                <aside className="flex gap-1">
                    <p>{data.company || data.university}</p>
                    {(data.startDate !== "" || data.endDate !== "") && (
                        <p className="font-bold">
                            | 
                            {" " + data.startDate + " - "}
                            {data.endDate === "" ? "Present" : data.endDate}
                        </p> )}
                </aside>
            </div>

            {data.description && <div>
                <p>{data.description}</p>
            </div>}
        </section>
    )
}