import React, {useContext, useState} from 'react';
import validator from 'validator';
import {setDataAction} from '../../actions/DataActions';
import {clearModalAction, goForwardAction} from '../../actions/ModalActions';
import {loginAction} from '../../actions/UserActions';
import {DataContext} from '../../contexts/DataContext';
import {ModalContext} from '../../contexts/ModalContext';
import {UserContext} from '../../contexts/UserContext';
import {subscribe} from '../../server/login';
import {getAdminsData, getRouteFromLocation} from '../../server/utils';
import {useLocation} from "react-router-dom";
import isInt from "validator/es/lib/isInt";

const SubscribeForm = (props) => {
    const {userData, userDataDispatch} = useContext(UserContext);
    const {modalDataDispatch} = useContext(ModalContext);
    const {contentDataDispatch} = useContext(DataContext);
    const [inputClasses, setInputClasses] = useState(["", "", "", "", "", "", "", "", ""]);
    const [invalidMessages, setInvalidMessages] = useState(["", "", "", "", "", "", "", "", ""]);
    const [validInputs, setValidInputs] = useState([false, false, false, false, false, false, false, false, false]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [id, setId] = useState("");
    const rolePlaceHolderValue = "Pick a Role:"
    const [role, setRole] = useState(rolePlaceHolderValue);
    const [phone, setPhone] = useState("");

    const currentRoute = getRouteFromLocation(useLocation());
    const setUsageOnLogin = () => {
        const startTime = Date.now()
        contentDataDispatch(setDataAction({
            routeData: {route: currentRoute, timestamp: startTime},
            appStartTime: startTime,
            userId: userData.userId,
            totalPages: 1
        }))
        contentDataDispatch(setDataAction({
            routeData: {route: currentRoute, timestamp: startTime},
            appStartTime: startTime,
            userId: userData.userId,
        }))
    }

    const isFormInvalid = () => {
        return validInputs.includes(false);
    };

    const setStateOfInputs = (message, inputClass, isvalidInput, inputindex) => {
        const newInavlidMessages = [...invalidMessages];
        const newInputClasses = [...inputClasses];
        const newValidInputs = [...validInputs];
        newInavlidMessages[inputindex] = message;
        setInvalidMessages(newInavlidMessages);
        newInputClasses[inputindex] = inputClass;
        setInputClasses(newInputClasses);
        newValidInputs[inputindex] = isvalidInput;
        setValidInputs(newValidInputs);
    };

    const validateInput = (
        value,
        inputindex,
        isValueValidFunc,
        setValue,
        missingValueMessage,
        invalidValueMessage
    ) => {


        if (value.length > 0) {
            if (isValueValidFunc(value)) {
                setStateOfInputs("", "", true, inputindex);
                setValue(value);
            } else {
                setStateOfInputs(invalidValueMessage, "input-invalid", false, inputindex);
            }
        } else {
            setStateOfInputs(missingValueMessage, "input-invalid", false, inputindex);
        }
    };

    const onBlurRole = (event) => {
        const newRole = event.target.value;
        const isRoleValid = (value) => {
            return value !== rolePlaceHolderValue;
        };
        validateInput(
            newRole,
            4,
            isRoleValid,
            setRole,
            "You must pick a role",
            "You must pick a role"
        );
    };

    const onBlurPhone = (event) => {
        const newPhoneNumber = event.target.value.trim();

        function isValidPhoneNumber(phoneNumber) {
            const phoneNumberPattern = /^05\d{8}$/;
            return phoneNumberPattern.test(phoneNumber);
        }

        validateInput(
            newPhoneNumber,
            5,
            isValidPhoneNumber,
            setPhone,
            "You must enter a phone number",
            'Phone number must start with 05x and have 10 digits, no hyphens ("-").'
        );
    };

    const onBlurUsername = (event) => {
        const newUsername = event.target.value.trim();
        const isUsenamevalid = (value) => {
            return true;
        };
        validateInput(
            newUsername,
            0,
            isUsenamevalid,
            setUsername,
            "You must enter username",
            "Username could not be MOSHE!!!"
        );
    };

    const onBlurEmail = (event) => {
        const newEmail = event.target.value.trim();

        validateInput(
            newEmail,
            1,
            validator.isEmail,
            setEmail,
            "You must enter your email",
            "Email invalid"
        );
    };

    const onBlurPassword = (event) => {
        const newPassword = event.target.value.trim();
        const isPasswordValid = (value) => {
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
            return passwordRegex.test(value);
        };
        validateInput(
            newPassword,
            2,
            isPasswordValid,
            setPassword,
            "You must enter password",
            "Password must contain capital and regular characters, numbers and must have at least 8 characters"
        );
    };

    const onBlurPasswordRepeated = (event) => {
        const passwordRepeated = event.target.value.trim();
        const isPasswordRepeatedValid = () => {
            return password === passwordRepeated;
        };
        validateInput(
            passwordRepeated,
            3,
            isPasswordRepeatedValid,
            () => {
            },
            "You must enter again your password",
            "The two passwords not identical"
        );
    };

    const onBlurFirstName = (event) => {
        const newUsername = event.target.value.trim();
        const isUsenamevalid = (value) => {
            return true;
        };
        validateInput(
            newUsername,
            6,
            isUsenamevalid,
            setFirstName,
            "You must enter a first name",
            "Invalid name"
        );
    };

    const onBlurLastName = (event) => {
        const newUsername = event.target.value.trim();
        const isUsenamevalid = (value) => {
            return true;
        };
        validateInput(
            newUsername,
            7,
            isUsenamevalid,
            setLastName,
            "You must enter a first name",
            "Invalid name"
        );
    };

    const onBlurId = (event) => {
        const newUsername = event.target.value.trim();
        const isIdValid = (value) => {
            return value.length == 9 && isInt(value);
        };
        validateInput(
            newUsername,
            8,
            isIdValid,
            setId,
            "You must enter an ID",
            "Id must be exactly 9 digits"
        );
    };

    const onSubmitForm = async (event) => {
        event.preventDefault();
        try {
            const request = {
                email,
                password,
                name: username,
                phone,
                role,
                firstName,
                lastName,
                personalId: id,
                isAdmin: !props.partOfLogin
            };
            console.log(request)
            const subscribeData = await subscribe(request);
            if (props.partOfLogin) userDataDispatch(loginAction(subscribeData, false));
            else {
                const admins = await getAdminsData(userData.token)
                contentDataDispatch(setDataAction(admins));
            }
            setUsageOnLogin()

            modalDataDispatch(clearModalAction());
            modalDataDispatch(goForwardAction({
                elementName: "ApprovalMessage",
                props: {message: "Account successfully added!"}
            }));

        } catch (err) {
            const errorMessageArray = ["", "", "", ""]
            errorMessageArray[err.index || 3] = err.message;
            setInvalidMessages(errorMessageArray)
        }

    };

    const onClickLogin = () => {
        props.setIsLoginMode(true);
    };

    return (
        <div className="login-form">
            <h3>Subscribe</h3>
            <form onSubmit={onSubmitForm}>
                <input placeholder="First Name" className={inputClasses[6]} onBlur={onBlurFirstName}/>
                {invalidMessages[6] !== "" && <div className="invalid-message">{invalidMessages[6]}</div>}
                <input placeholder="Last Name" className={inputClasses[7]} onBlur={onBlurLastName}/>
                {invalidMessages[7] !== "" && <div className="invalid-message">{invalidMessages[7]}</div>}
                <input placeholder="ID" className={inputClasses[8]} onBlur={onBlurId}/>
                {invalidMessages[8] !== "" && <div className="invalid-message">{invalidMessages[8]}</div>}
                <input placeholder="Username" className={inputClasses[0]} onBlur={onBlurUsername}/>
                {invalidMessages[0] !== "" && <div className="invalid-message">{invalidMessages[0]}</div>}
                <input placeholder="Email" className={inputClasses[1]} onBlur={onBlurEmail}/>
                {invalidMessages[1] !== "" && <div className="invalid-message">{invalidMessages[1]}</div>}
                <input type="password" placeholder="Password" className={inputClasses[2]} onBlur={onBlurPassword}/>
                {invalidMessages[2] !== "" && <div className="invalid-message">{invalidMessages[2]}</div>}
                <input type="password" placeholder="Repeat on password" className={inputClasses[3]}
                       onBlur={onBlurPasswordRepeated}/>
                {invalidMessages[3] !== "" && <div className="invalid-message">{invalidMessages[3]}</div>}
                <select value={role} className={inputClasses[4]} onChange={onBlurRole}>
                    <option value={rolePlaceHolderValue}>{rolePlaceHolderValue}</option>
                    <option value="Seller">Seller</option>
                    <option value="Cook">Cook</option>
                    <option value="Manager">Manager</option>
                </select>
                {invalidMessages[4] !== "" && <div className="invalid-message">{invalidMessages[4]}</div>}
                <input placeholder="Enter a phone number" className={inputClasses[5]}
                       onBlur={onBlurPhone}/>
                {invalidMessages[5] !== "" && <div className="invalid-message">{invalidMessages[5]}</div>}
                <div className="login-form__nav">
                    <button type="submit" disabled={isFormInvalid()}>Submit</button>
                    {props.partOfLogin && <div className="login-or-subscribe" onClick={onClickLogin}>Login</div>}
                </div>
            </form>
        </div>
    );
};

export default SubscribeForm;