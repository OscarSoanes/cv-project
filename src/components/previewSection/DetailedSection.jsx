import { Row } from "./Row"

export function DetailedSection({type, array}) {
    return (
        <section>
            <h3>{type}</h3>

            {array.map((field) => 
                <Row key={field.id} data={field}/>
            )}
        </section>
    ) 
}