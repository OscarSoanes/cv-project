import { SmallContent } from "./SmallContent"
import { DetailedSection } from "./DetailedSection"

export function Preview({data}) {
    return (
        <section>
            <h2>Preview</h2>

            <section>
                <div>
                    <h3>{data.name}</h3>
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

            <DetailedSection type="Work Experience" array={data.workExperience} />
        </section>
    )
}