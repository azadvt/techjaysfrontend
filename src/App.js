import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Routed from "./routes/Route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from 'react';

function App() {
  return (
    <>
    <Router>
        <Routed />
      </Router>
      <ToastContainer />

    </>
    
  );
}

export default App;
