const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { 
        type: String, required: true
     },
    email: { 
        type: String, required: true
     },
    password: { 
        type: String, required: true
     },
});

const User = mongoose.model('User', userSchema);

const createUser = async (userData) => {
    try {
        const user = new User(userData);
        await user.save();
        return user;
    } catch (error) {
        throw new Error('Error creating user');
    }
};

const findUserByUsername = async (username) => {
    try {
        return await User.findOne({ username });
    } catch (error) {
        throw new Error('Error finding user by username');
    }
};


module.exports = {
    createUser,
    findUserByUsername,
}