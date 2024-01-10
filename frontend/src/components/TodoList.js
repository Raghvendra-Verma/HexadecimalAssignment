import React, { useState, useEffect } from "react";
import axios from "axios";

const TodoList = ({ userId }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getTodos/${userId}`)
      //   console.log("object", data);
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log("Error fetching to-do List:", error);
      });
  }, [userId]);

  return (
    <div>
      <h1>Todo list for User {userId}</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr key={todos.id}>
            <td>{todos.id}</td>
            <td>{todos.title}</td>
            <td>
              {todos.completed !== undefined ? todos.completed.toString() : ""}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
