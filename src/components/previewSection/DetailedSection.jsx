import { Row } from "./Row"

export function DetailedSection({type, array}) {
    return (
        <section>
            <h3 className="text-[2.5vw] lg:text-[1.75vw] 2xl:text-[1.25vw]">{type}</h3>

            {array.map((field) => 
                <Row key={field.id} data={field}/>
            )}
        </section>
    ) 
}