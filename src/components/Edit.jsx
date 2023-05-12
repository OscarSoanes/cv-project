import { Input } from "./Input";

export function Edit({changeField}) {
    return (
        <section>
            <h2>Edit</h2>

            <section>
                <h3>Personal Details</h3>
                <Input forType="name" onChange={changeField}></Input>
                <Input forType="email" onChange={changeField}></Input>
                <Input forType="phone" onChange={changeField}></Input>
                <Input forType="location" onChange={changeField}></Input>
                <Input forType="position" onChange={changeField}></Input>
            </section>

        </section>
    )
}