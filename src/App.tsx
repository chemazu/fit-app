import React from "react";
import "./App.scss";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import Register from "./pages/Register";
import axios from "axios";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
// Create a client
const queryClient = new QueryClient();

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register"  element={<Register />} />

        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
