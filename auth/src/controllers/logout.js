const logout = async (req)=>{

    req.user.tokens = req.user.tokens.filter((token) => {
        return token.token !== req.token
    });
    await req.user.save();
}


module.exports = {logout}