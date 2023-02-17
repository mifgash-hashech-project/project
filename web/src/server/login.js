import axios from 'axios';
export const serverURL = `http://${process.env.REACT_APP_SERVER_URL}`;

const getRole = (isAdmin) => {
    return isAdmin ? "admin" : "user";
}

export const loginUser = async (request) => {
    const role = getRole(request.isAdmin)
    try {
        const result = await axios.post(`${serverURL}/api/auth/${role}/login`, request);
        return result.data;

    } catch (err) {
        const error = new Error("Unable to login")
        throw error;
    }
};

export const subscribe = async (request) => {
    const role = getRole(request.isAdmin)

    try {
        const result = await axios.post(`${serverURL}/api/auth/${role}/subscribe`, request);
        return result.data;

    } catch (err) {
        const error = new Error("Unable to login")
        throw error;
    }
};

export const logout = async (token, isAdmin) => {
    const role = getRole(isAdmin)

    try {
        await axios.post(`${serverURL}/api/auth/${role}/logout`, { token, isAdmin });
    } catch (err) {
        throw err;
    }


};