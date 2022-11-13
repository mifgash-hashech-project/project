import React, {useState} from 'react'
import {addEmployees,modifyEmployee, getEmployeeById} from "../../server/employees";

export default function UpdateEmployee({setShowFormFunc}) {
    const [email, setEmail] = useState("");
    const [isEmailInputValid, setIsEmailInputValid] = useState(false);
    const [id, setId] = useState("");
    const [isIdInputValid, setIsIdInputValid] = useState(false);
    const [phone, setPhone] = useState("");
    const [isPhoneInputValid, setIsPhoneInputValid] = useState(false);
    const [education, setEducation] = useState("");
    const [isEducationInputValid, setIsEducationInputValid] = useState(false);
    const [hobbies, setHobbies] = useState("");
    const [isHobbiesInputValid, setIsHobbiesInputValid] = useState(false);
    const onSubmitForm = async (event)=>{
        event.preventDefault();
        if (areInputsValid()) {
            const employee = {email, id, hobbies, phone, education};
            const existingEmployee = await getEmployeeById(id);
            if (!!existingEmployee) await modifyEmployee(employee);
            else await addEmployees(employee);
            return setShowFormFunc(false)
        }
    }
    const areInputsValid = ()=>{
        return isEmailInputValid && isIdInputValid && isPhoneInputValid && isEducationInputValid && isHobbiesInputValid
    }

    const onBlurEmailInput = (event)=>{
        onBlurFunction(event,setEmail, setIsEmailInputValid, true)
    }
    const onBlurIdInput = (event)=>{
        onBlurFunction(event,setId, setIsIdInputValid, true)
    }
    const onBlurPhoneInput = (event)=>{
        onBlurFunction(event,setPhone, setIsPhoneInputValid, true)
    }
    const onBlurEducationInput = (event)=>{
        onBlurFunction(event,setEducation, setIsEducationInputValid, true)
    }

    const onBlurHobbiesInput = (event)=>{
        onBlurFunction(event,setHobbies, setIsHobbiesInputValid, true)
    }

    const onBlurFunction = (event, inputSetFunc, validationSetFunc, toTrim) => {
        const theValue = toTrim? event.target.value.trim(): event.target.value;
        if (theValue === '') {
            inputSetFunc('');
            validationSetFunc(false);
        } else {
            inputSetFunc(theValue);
            validationSetFunc(true);
        }
    }
    return (
        <div className="form__container">
            <h2>Update employee information</h2>
            <form id="u_information" >

                <label>Employee Code:</label>
                <input name="id" type="text/number" placeholder="enter employee code" onBlur={onBlurIdInput}/>

                <label>Education:</label>
                <input name="education" type="text/number" placeholder="enter education" onBlur={onBlurEducationInput}/>
                <label>Phone:</label>
                <input name="phone" type="tel" placeholder="enter phone" onBlur={onBlurPhoneInput}/>
                <label>Email:</label>
                <input name="email" type="mail" placeholder="enter email" onBlur={onBlurEmailInput}/>
                <label>Hobbies:</label>
                <input name="hobbies" type="text/number" placeholder="enter hobbies" onBlur={onBlurHobbiesInput}/>
                <button type="submit" onClick={onSubmitForm}>Submit</button>
            </form>
        </div>

    )
}