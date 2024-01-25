const jwtUtils = require('../utils/jwtUtils');
const userModel =  require('../models/userModel');



const login = async (req,res) => {
    const {username , password} = req.body;

    const user = await userModel.findUserByUsername(username);

    if(!user || user.password !== password) {
        return res.status(401).json({message: 'Invalid credentials'});
    }

    const token = jwtUtils.generateToken(user);
    res.json({ token, message:"Login successful"});
}


module.exports = {
    login,
}