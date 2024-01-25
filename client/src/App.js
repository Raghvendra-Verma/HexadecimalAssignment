import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import DataTable from "./components/DataTable";
import authService from './services/authService';

import './App.css';
import "./style/style.css";

const PrivateRoute = ({ element }) => {
  return authService.isAuthenticated() ? (
    element
  ) : (
    <Navigate to="/login" replace />
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/dataTable" element={<PrivateRoute element={<DataTable/>}/>}/>
          {/* <Route path="/dataTable" element={<DataTable/>}/> */}
      </Routes>
    </Router>
  );
};

export default App;
