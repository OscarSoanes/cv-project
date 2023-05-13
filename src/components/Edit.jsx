import { Input } from "./Input";
import { Details } from "./Details"

export function Edit({changeField, addWorkExperience, workExp, changeArrayField, removeArrayAtID, changeDateField, addEducation}) {
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
                {workExp.map((experience) =>
                    <Details key={experience.id} dataKey={experience.id}
                        inputs = {[
                            {id: "company", prettier: "Company"},
                            {id: "position", prettier: "Position"},
                            {id: "startDate", prettier: "Start Date"},
                            {id: "endDate", prettier: "End Date"},
                        ]} inputHandler={changeArrayField} removeHandler={removeArrayAtID} setDate={changeDateField} target="workExperience"/>
                )}

                <button onClick={addWorkExperience}>Add</button>
            </section>

            <section>
                <h3>Education</h3>
                <button onClick={addEducation}>Add</button>
            </section>
        </section>
    )
}