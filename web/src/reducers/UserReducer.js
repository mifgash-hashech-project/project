import {nanoid} from "nanoid";
export const initialUserData = {
    loggedIn: false,
    isAdmin: false,
    activeUser: '',
    location: '',
    token: '',
    userId: '123456',
    sessionId: nanoid(),
    windowWidth: null,

};

const UserReducer = (userData, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...userData,
                loggedIn: true,
                activeUser: action.user.user.name,
                token: action.user.token,
                userId: action.user.id,
                isAdmin: action.isAdmin
            };
        case "WINDOW":
            return {
                ...userData,
                windowWidth: action.windowWidth
            };
        case "LOGOUT":
            return {
                ...userData,
                loggedIn: false,
                activeUser: '',
                token: '',
                userId: '',
                isAdmin: false
            };

        case "SET_LOCATION":
            return {
                ...userData,
                location: action.location
            };

        default:
            return { ...userData };

    }
};


export default UserReducer;