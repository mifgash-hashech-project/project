import React, {useContext, useState} from 'react'
import {getEmployees} from "../../server/employees";
import Employees from "./Employees";
import Profiles from "./Profiles";
import UpdateEmployee from "./UpdateEmployee";
import {ModalContext} from "../../contexts/ModalContext";
import {goForwardAction} from "../../actions/ModalActions";
import Modal from "../main/Modal";

export default function Roles() {
    const { modalData, modalDataDispatch } = useContext(ModalContext);
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
        const children = {
            elementName: 'UpdateEmployee',
            props: {
                setShowFormFunc: setUpdateEmployee,

            }
        }
        modalDataDispatch(goForwardAction(children));
    }

    return (
        <div className="roles__container">
            <div className="employees__buttons_container">
                <button  onClick={onClickShowEmployees}>{showEmployeesText}</button>
                <button  onClick={onClickUpdateEmployees}>Add/Update employee</button>
            </div>
            {showEmployees && <Employees employeesList={employeesData}/>}
            <Profiles/>
            {modalData.isModal && <Modal />}
        </div>

    )
}
