const jwt = require('jsonwebtoken');
const User = require('../db/models/userModel');
const Admin = require('../db/models/adminModel');

const mySecret = process.env.JWT_SECRET || "ThisIsMySecret123!"
const auth = async (req, res, next) => {
    try {
        const {token, isAdmin} = req.body;
        console.log(isAdmin)
        const decoded = jwt.verify(token, mySecret);
        console.log("token")
        console.log(token)
        console.log(decoded)
        const user = isAdmin ? await Admin.findOne({_id: decoded._id, 'tokens.token': token}) : await User.findOne({
            _id: decoded._id,
            'tokens.token': token
        });
        if (!user) throw new Error()


        req.token = token;
        req.user = user;
        next()
    } catch (err) {
        console.log(err)
        return res.status(401).send({message: 'Please authenticate.'});
    }
}

module.exports = auth;