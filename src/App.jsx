// App.jsx

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import LoginForm from "./components/Loginform";
import LoginAdmin from "./admin/LoginAdmin";
import AdminBooks from "./admin/AdminBooks"; // Import the AdminBooks component
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [authUser] = useAuth();

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/loginform" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/admin/books"
          element={authUser ? <AdminBooks /> : <Navigate to="/loginadmin" />}
        />
        <Route path="/admin/books" element={<AdminBooks />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/loginadmin" element={<LoginAdmin />} />
        {/* Add a route for the admin interface */}
        {/* {authUser && authUser.isAdmin && (
          <Route path="/admin/books" element={<AdminBooks />} />
        )} */}
        {/* Add other admin routes as needed */}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
