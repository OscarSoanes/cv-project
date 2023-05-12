import { Input } from "./Input";

export function Edit({setName}) {
    return (
        <section>
            <h2>Edit</h2>

            <section>
                <h3>Personal Details</h3>
                <Input type="name" onChange={setName}></Input>
                <Input type="email"></Input>
                <Input type="phone_number"></Input>
                <Input type="location"></Input>
            </section>

        </section>
    )
}