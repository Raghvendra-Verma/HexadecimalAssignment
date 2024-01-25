const jwt = require('jsonwebtoken');
const secretKey = 'abcdefg';


const generateToken = (user) =>{
    return jwt.sign({user}, secretKey, {expiresIn: '1h'});
};


const verifyToken = (token) =>{
    try {
        return jwt.verify(token,secretKey);
    } catch (error) {
        return null;
    }
};


module.exports = {
    generateToken,
    verifyToken,
}