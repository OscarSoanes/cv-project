import { SmallContent } from "./SmallContent"
import { DetailedSection } from "./DetailedSection"

export function Preview({data}) {
    return (
        <section>
            <h2 className="mt-3 mb-3 text-2xl font-normal">Preview</h2>

            <div className="bg-white p-6 px-[10%] border-black border border-solid shadow shadow-gray-400 aspect-[1/1.414]">
                <section className="border-b-4 border-solid border-teal-400 header">
                    <div>
                        <h3 className="font-bold text-teal-800 sm:text-2xl">{data.name}</h3>
                        <p className="font-bold text-teal-800 sm:text-2xl">{data.position}</p>
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
                <DetailedSection type="Education" array={data.education} />
            </div>
        </section>
    )
}