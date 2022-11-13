import React, {useState} from 'react'
import {addEmployees, getEmployees, modifyEmployee} from "../../server/employees";
import Employees from "./Employees";
import Profiles from "./Profiles";
import UpdateEmployee from "./UpdateEmployee";

export default function Roles() {
    const [showEmployees, setShowEmployees] = useState(false);
    const [showEmployeesText, setShowEmployeesText] = useState("Show emloyees");
    const [updateEmployee, setUpdateEmployee] = useState(false);
    const [employeesData, setEmployeesData] = useState([]);
    const onClickShowEmployees = async () => {
        const text = showEmployees ? "Show employees" : "Hide employees";
        setShowEmployees(!showEmployees)
        setShowEmployeesText(text)
        const employees = await getEmployees();
        setEmployeesData(employees)
        setUpdateEmployee(false);
    }
    const onClickUpdateEmployees = async () => {
       setUpdateEmployee(!updateEmployee);
       setShowEmployees(false);
       setShowEmployeesText("Show emloyees")
    }

    return (
        <div className="roles__container">
            <div className="employees__buttons_container">
                <button  onClick={onClickShowEmployees}>{showEmployeesText}</button>
                <button  onClick={onClickUpdateEmployees}>Add/Update employee</button>
            </div>
            {!showEmployees && updateEmployee && <UpdateEmployee setShowFormFunc={setUpdateEmployee}/>}
            {showEmployees && <Employees employeesList={employeesData}/>}
            <Profiles/>
        </div>

    )
}
