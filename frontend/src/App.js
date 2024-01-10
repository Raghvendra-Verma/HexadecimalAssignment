import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AllUser from "./components/fetchDataFromBackend";
import './App.css';
import "./style/style.css";

function App() {
  const [selectdUserId, setSelectdUserId] = useState(null);

  const handleUserClick = (userId) => {
    setSelectdUserId(userId);
  }
  
  return (
    <>
      <div>
          <AllUser onUserClick={handleUserClick}/>
          {selectdUserId && <TodoList userId={selectdUserId}/>}
      </div>
    </>
  );
};

export default App;
