import React from "react";
import "./App.scss";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

// Create a client
const queryClient = new QueryClient();

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
