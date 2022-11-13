import axios from "axios";
import {serverURL} from "./login";

export const getEmployees = async () => {
    try {
        const result = await axios.get(`${serverURL}:3001/get-employees`);
        return result.data.employees;
    } catch (err) {
        throw err;
    }
};

export const getEmployeeById = async (id) => {
    try {
        const result = await axios.get(`${serverURL}:3001/get-employee/${id}`);
        return result.data.employee;
    } catch (err) {
        if (err.response?.status === 404) return undefined
        throw err;
    }
};

export const addEmployees = async (newEmployee) => {
    try {
        await axios.post(`${serverURL}:3001/add-employees`, {newEmployee});

    } catch (err) {
        throw err;
    }
};

export const modifyEmployee = async (employee) => {
    try {
        await axios.patch(`${serverURL}:3001/modify-employee`, {employee});

    } catch (err) {
        throw err;
    }
};
