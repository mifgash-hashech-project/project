import axios from 'axios';
export const serverURL = `http://localhost`;
const authServerPort = 3003

const getRole = (isAdmin) => {
    const role = isAdmin ? "admin" : "user";
    return role
}

export const loginUser = async (request) => {
    const role = getRole(request.isAdmin)
    try {
        const result = await axios.post(`${serverURL}:${authServerPort}/${role}/login`, request);
        return result.data;

    } catch (err) {
        const error = new Error("Unable to login")
        throw error;
    }
};

export const subscribe = async (request) => {
    const role = getRole(request.isAdmin)

    try {
        const result = await axios.post(`${serverURL}:${authServerPort}/${role}/subscribe`, request);
        return result.data;

    } catch (err) {
        const error = new Error("Unable to login")
        throw error;
    }
};

export const logout = async (token, isAdmin) => {
    const role = getRole(isAdmin)

    try {
        await axios.post(`${serverURL}:${authServerPort}/${role}/logout`, { token, isAdmin });
    } catch (err) {
        throw err;
    }


};