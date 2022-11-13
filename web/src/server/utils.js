import { serverURL } from './login';
import axios from 'axios';
export const getElementFromArray = (array, key, value) => {
    try {
        return array.filter((element) => (element[key] === value))[0];
    } catch (err) {
        return
    }

};


export const changePassword = async (token, request, isAdmin) => {
    try {
        await axios.patch(`${serverURL}/data/update-password`, { token, request, isAdmin });
    } catch (err) {
        throw err;
    }
};

export const getAdminsData = async (token) => {
    try {
        const result = await axios.get(`${serverURL}/data/admin/get-all`, { params: { token } });
        return { adminsData: result.data };
    } catch (err) {
        console.log(err.response?.statusText);
        return { adminsData: [] };
    }

}

export const deleteAdmins = async (adminsIDsArray, token) => {
    try {
        await axios.post(`${serverURL}/data/admin/delete`, { token, admins: adminsIDsArray });

    } catch (err) {
        console.log(err.response?.statusText)
    }
}

export const getAllData = async () => {
    const data = {};
    try {

        data.isLoaded = true;
        return data;
    } catch (err) {
        console.log(err)
    }

};
const getArticleByid = (articleID, articles) => {
    return articles.filter(({ id }) => (id === articleID))[0];
};