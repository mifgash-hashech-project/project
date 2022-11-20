const User = require("../db/models/userModel");
const Admin = require("../db/models/adminModel");

const subscribe = async (req, role)=>{
    const user = role === "User" ? new User(req.body) : new Admin(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    return {user, token}
}


module.exports = {subscribe}