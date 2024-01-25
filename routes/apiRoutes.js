const express = require("express");
const router = express.Router();
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const todosRoutes = require('./todosRoutes');

//for creating the user and getting all users from api
router.use('/user',userRoutes);
//for user authentication and login
router.use("/auth",authRoutes);
//for getting all the todos or specific todos
router.use('/todos',todosRoutes);



module.exports = router;