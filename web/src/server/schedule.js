import axios from "axios";
import {serverURL} from "./login";

export const getWorkerSchedule = async (data) => {
    try {
        const result = await axios.post(`${serverURL}/api/schedule/get-shifts`, {data});
        return result.data;
    } catch (err) {
        console.log(err.message)
        return null
    }
};