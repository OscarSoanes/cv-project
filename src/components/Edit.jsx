import { Input } from "./Input";

export function Edit({changeField, addWorkExperience}) {
    return (
        <section>
            <h2>Edit</h2>

            <section>
                <h3>Personal Details</h3>
                <Input id="name" onChange={changeField} prettier="Name"></Input>
                <Input id="email" onChange={changeField} prettier="Email"></Input>
                <Input id="phone" onChange={changeField} prettier="Phone Number"></Input>
                <Input id="location" onChange={changeField} prettier="Location"></Input>
                <Input id="position" onChange={changeField} prettier="Position"></Input>
            </section>


            <section>
                <h3>Work Experience</h3>
                <button onClick={addWorkExperience}>Add</button>
            </section>

            <section>
                <h3>Education</h3>
                <button>Add</button>
            </section>
        </section>
    )
}