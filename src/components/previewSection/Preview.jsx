import { SmallContent } from "./SmallContent"

export function Preview({data}) {
    return (
        <section>
            <h2>Preview</h2>

            <section>
                <div>
                    <h2>{data.name}</h2>
                    <p>{data.position}</p>
                </div>
                <aside>
                    <SmallContent value={data.phone}/>
                    <SmallContent value={data.email}/>
                    <SmallContent value={data.location}/>
                </aside>
            </section>

            <section>
                <p>{data.description}</p>
            </section>
            
        </section>
    )
}