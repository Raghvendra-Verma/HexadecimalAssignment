const express = require('express');
const mongoose = require("mongoose");
const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes');
const todosRoutes = require('./routes/todosRoutes')
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3001;

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Todos')
.then(()=>{
    console.log("DataBase Connected");
}).catch((error)=>{
    console.log("Database connection failed!");
})

//Api routes
app.use('/api/auth',authRoutes);
app.use('/api', apiRoutes);
app.use('/api',todosRoutes);


app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})