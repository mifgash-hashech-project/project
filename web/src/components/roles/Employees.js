import React from 'react'
import Employee from "./Employee";
import {nanoid} from "nanoid";

export default function Employees({employeesList}) {

    return (
        <div className="employees__container">

            {employeesList.length > 0 && employeesList.map((e, i) => (
                <Employee
                    firstname={employeesList[i].firstname}
                    lastname={employeesList[i].lastname}
                    personalid={employeesList[i].personalid}
                    phone={employeesList[i].phone}
                    email={employeesList[i].email}
                    role={employeesList[i].role}
                    key={nanoid()}
                />
            ))}
        </div>

    )
}