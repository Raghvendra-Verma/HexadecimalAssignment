const express = require('express');
const axios = require('axios');

const app = express();

const port = 3001;

const cors = require("cors");

app.use(cors());

app.use(express.json());


app.get('/getDataFromAPI', async(req,res)=>{
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");

        const apiData = response.data;

        res.json(apiData);
    } catch (error) {
        console.error('Unable to fetch data from api:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.get('/getTodos/:id', async(req,res)=>{
    try {
        const todoApiResponse = await axios.get("https://jsonplaceholder.typicode.com/todos");

        const todos = todoApiResponse.data;

        const todoId = parseInt(req.params.id);
  const todo = todos.find(item => item.id === todoId);

  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  res.json(todo);

    } catch (error) {
        console.error('Error fetching to-do list:', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

// Filtering route based on a query parameter
app.get('/getTodos', async(req, res) => {
    const todoApiResponse = await axios.get("https://jsonplaceholder.typicode.com/todos");

    const todos = todoApiResponse.data;
    const { completed } = req.query;
  
    if (completed === 'true' || completed === 'false') {
      const filteredTodos = todos.filter(todo => todo.completed === (completed === 'true'));
      return res.json(filteredTodos);
    }
  
    res.json(todos);
  });

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})