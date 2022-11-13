import React from 'react'
import Employee from "./Employee";
import {nanoid} from "nanoid";

export default function Employees({employeesList}) {

    return (
        <div className="employees__container">

            {employeesList.length > 0 && employeesList.map((e, i) => (
                <Employee
                    id={employeesList[i].id}
                    education={employeesList[i].education}
                    phone={employeesList[i].phone}
                    email={employeesList[i].email}
                    hobbies={employeesList[i].hobbies}
                    key={nanoid()}
                />
            ))}
        </div>

    )
}