import axios from "axios";
import {serverURL} from "./login";

export async function saveRouteUsage(data){
    await axios.post(`${serverURL}/api/usage/page-usage`, {data});
}

export async function saveTotalUsage(data){
   await axios.post(`${serverURL}/api/usage/app-usage`, {data});
}

export function getRouteUsage({route, timestamp}, now, userId, sessionId){
    return {
        route: route,
        startTime: timestamp,
        endTime: now,
        totalUsage: now - timestamp,
        userId,
        sessionId
    }
}

export function getTotalUsage(totalPages, appStartTime, appEndTime, totalAppUsage, userId, sessionId){
    return {
        totalPages, appStartTime, appEndTime, totalAppUsage, userId, sessionId
    }
}