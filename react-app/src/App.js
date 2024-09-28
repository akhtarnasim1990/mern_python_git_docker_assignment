import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserForm from "./pages/UserForm";

function App() {
  const navigation = useNavigate();
  return (
    <div>
      <nav>
        <button onClick={() => navigation("/")}>Home</button>
        <button onClick={() => navigation("/users")}>Users</button>
        <button onClick={() => navigation("/userForm")}>Users form</button>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/userForm" element={<UserForm />} />
      </Routes>
    </div>
  );
}

export default App;
