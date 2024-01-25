const axios = require('axios');
const userModel = require('../models/userModel');

const createUser = async (req,res) => {
    const {username, email, password} = req.body;

    if(userModel.findUserByUsername(username)) {
        return res.status(400).json({message:"Username already exists"});
    }

    const user = await userModel.createUser({username, email, password });
    res.status(201).json({user, message: 'User created successfully'});
}

const logout = (req,res)=> {
    localStorage.removeItem('token');
    res.json({message:'Logout successful'});
}

const getUserData = async (req,res) =>{
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");

        const apiData = response.data;
        res.json(apiData);
    } catch (error) {
        console.error('Unable to fetch data from api:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }

};


module.exports = {
    getUserData,
    createUser,
    logout
}