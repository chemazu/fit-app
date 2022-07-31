import React from "react";
import "./App.scss";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Register from "./pages/Register";
import axios from 'axios';
// Create a client
const queryClient = new QueryClient();

axios.defaults.baseURL = process.env.REACT_APP_API_URL
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Register />
      </QueryClientProvider>
    </div>
  );
}

export default App;
