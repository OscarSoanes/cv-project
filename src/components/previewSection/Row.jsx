export function Row({data}) {
    return (
        <section>
            <div>
                <h4>{data.position || data.course} </h4>

                <aside>
                    <p>{data.company || data.university} |</p>
                    <p>
                        {data.startDate + " - "}
                        {data.endDate === "" ? "Present" : data.endDate}
                    </p>
                </aside>
            </div>
        </section>
    )
}