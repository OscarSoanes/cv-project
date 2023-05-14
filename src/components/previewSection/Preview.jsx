import { SmallContent } from "./SmallContent"
import { DetailedSection } from "./DetailedSection"

import { MdPhone, MdEmail, MdLocationPin } from 'react-icons/md';

export function Preview({data}) {
    return (
        <section>
            <h2 className="mt-3 mb-3 text-2xl font-normal">Preview</h2>

            <div className="bg-white p-6 px-[10%] border-black border border-solid shadow shadow-gray-400 aspect-[1/1.414]">
                <section className="border-b-4 border-solid border-teal-400 header pb-3 min-h-[11vh]">
                    <div>
                        <h3 className="font-bold text-teal-800 text-[4vw] lg:text-[3vw] align-top 2xl:text-[2vw]">{data.name}</h3>
                        <p className="font-bold text-teal-800 text-[3vw] lg:text-[2vw] 2xl:text-[1.25vw]">{data.position}</p>
                    </div>
                    <aside className="grid justify-items-end content-center gap-1">
                        {data.phone !== "" && <SmallContent value={data.phone} icon={<MdPhone className="w-[1.5vw] lg:w-[1vw] 2xl:text-[0.75vw]"/>}/>}
                        {data.email !== "" && <SmallContent value={data.email} icon={<MdEmail className="w-[1.5vw] lg:w-[1vw] 2xl:text-[0.75vw]"/>}/>}
                        {data.location !== "" && <SmallContent value={data.location} icon={<MdLocationPin className="w-[1.5vw] lg:w-[1vw] 2xl:text-[0.75vw]"/>}/>}
                    </aside>
                </section>

                <section className="my-4 text-[2vw] lg:text-[1.25vw] 2xl:text-[1vw]">
                    <p>{data.description}</p>
                </section>

                {data.workExperience.length !== 0 && <DetailedSection type="Work Experience" array={data.workExperience} />}
                {data.workExperience.length !== 0 && <DetailedSection type="Education" array={data.education} />}
            </div>
        </section>
    )
}