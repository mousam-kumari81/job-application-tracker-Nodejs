import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login';
import Register from './components/Register';
import Home from './pages/Home';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route
          path="/"
          element={token ? <Home token={token} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;