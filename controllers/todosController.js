const axios = require('axios');

const getTodos = async (req, res) => {
  const todoApiResponse = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const todos = todoApiResponse.data;
  const { completed } = req.query;

  if (completed === "true" || completed === "false") {
    const filteredTodos = todos.filter(
      (todo) => todo.completed === (completed === "true")
    );
    return res.json(filteredTodos);
  }

  res.json(todos);
};

const getSpecificTodos = async (req, res) => {
  try {
    const todoApiResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    const todos = todoApiResponse.data;

    const todoId = parseInt(req.params.id);
    const todo = todos.find((item) => item.id === todoId);

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.json(todo);
  } catch (error) {
    console.error("Error fetching to-do list:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
    getTodos,
    getSpecificTodos
};
