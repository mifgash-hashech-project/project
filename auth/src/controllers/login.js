const User = require("../db/models/userModel");
const Admin = require("../db/models/adminModel");

const login = async (email, password, role) => {
    const user = role === "User" ? await User.findByCredentials(email, password) : await Admin.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    return {user, token}
}


module.exports = {login}