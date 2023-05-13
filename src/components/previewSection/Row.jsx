export function Row({data}) {
    return (
        <section>
            <div>
                <h4>{data.position}</h4>

                <aside>
                    <p>{data.company} |</p>
                    <p>
                        {data.startDate + " - "}
                        {data.endDate === "" ? "Present" : data.endDate}
                    </p>
                </aside>
            </div>
        </section>
    )
}