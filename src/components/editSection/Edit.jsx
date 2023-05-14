import { Input } from "./Input";
import { Details } from "./Details"
import { ButtonPrimary } from "./ButtonPrimary";

export function Edit({changeField, addWorkExperience, data, changeArrayField, removeArrayAtID, changeDateField, addEducation}) {
    return (
        <section className="border-solid border-2 border-sky-400 rounded-lg shadow-md shadow-slate-400 p-4 font-light bg-slate-100">
            <h2 className="mb-3 text-2xl font-normal">Edit</h2>

            <section className="my-4">
                <h3 className="text-xl">Personal Details</h3>
                <Input id="name" onChange={changeField} prettier="Name"></Input>
                <Input id="email" onChange={changeField} prettier="Email"></Input>
                <Input id="phone" onChange={changeField} prettier="Phone Number"></Input>
                <Input id="location" onChange={changeField} prettier="Location"></Input>
                <Input id="position" onChange={changeField} prettier="Position"></Input>
                <Input id="description" onChange={changeField} prettier="Description"></Input>
            </section>


            <section className="my-4">
                <h3 className="text-xl">Work Experience</h3>
                {data.workExperience.map((experience, index) =>
                    <Details key={experience.id} dataKey={experience.id}
                        inputs = {[
                            {id: "company", prettier: "Company"},
                            {id: "position", prettier: "Position"},
                            {id: "description", prettier: "Description"},
                            {id: "startDate", prettier: "Start Date"},
                            {id: "endDate", prettier: "End Date"},
                        ]} inputHandler={changeArrayField} removeHandler={removeArrayAtID} setDate={changeDateField} target="workExperience" index={index}/>
                )}

                <ButtonPrimary onClick={addWorkExperience} text="Add"/>
            </section>

            <section>
                <h3>Education</h3>
                {data.education.map((experience, index) =>
                    <Details key={experience.id} dataKey={experience.id}
                        inputs = {[
                            {id: "university", prettier: "University"},
                            {id: "course", prettier: "Course"},
                            {id: "startDate", prettier: "Start Date"},
                            {id: "endDate", prettier: "End Date"},
                        ]} inputHandler={changeArrayField} removeHandler={removeArrayAtID} setDate={changeDateField} target="education" index={index}/>
                )}
                <ButtonPrimary onClick={addEducation} text="Add"/>
            </section>
        </section>
    )
}