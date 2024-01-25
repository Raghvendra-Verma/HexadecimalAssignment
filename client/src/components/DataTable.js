import React, { useState } from 'react';
import TodoList from "../components/TodoList";
import AllUser from "../components/fetchDataFromBackend";
import LogoutButton from './LogoutButton';
import '../App.css';
import "../style/style.css";

const DataTable = () => {
    const [selectdUserId, setSelectdUserId] = useState(null);
  
    const handleUserClick = (userId) => {
      setSelectdUserId(userId);
    }
    
    return (
      <>
        <div>
            <AllUser onUserClick={handleUserClick}/>
            {selectdUserId && <TodoList userId={selectdUserId}/>}
            <LogoutButton/>
        </div>
      </>
    );
  };
  
  export default DataTable;
  