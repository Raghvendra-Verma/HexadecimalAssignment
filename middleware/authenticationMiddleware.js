const jwtUtils = require('../utils/jwtUtils');

const authenticationMiddleware = (req,res) => {
    const token = req.headers.authorization.split('')[1];

    if(!token) {
        return res.status(401).json({message: 'Unauthorized'});
    }

    const decoded = jwtUtils.verifyToken(token);
    if(!decoded) {
        return res.status(401).json({message:"Unauthorized"});
    }

    req.user = decoded.user;
    next();
}

module.exports = authenticationMiddleware;