import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Exam/Login";
import Home from "./Exam/Home";
import BookGallery from "./Exam/BookGallery";
import BookDetail from "./Exam/BookDetail";
import ProtectedRoute from "./Exam/ProtectedRoute"; 

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
    
      <Route
        path="/"
        element={<Login setIsAuthenticated={setIsAuthenticated} />}
      />

      
      <Route
        path="/home"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Home />
          </ProtectedRoute>
        }
      />

     
      <Route
        path="/gallery"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <BookGallery />
          </ProtectedRoute>
        }
      />

      
      <Route
        path="/book/:id"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <BookDetail />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
