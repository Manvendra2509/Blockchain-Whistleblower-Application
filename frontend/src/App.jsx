import React from "react";
import Home from "./pages/Home";
import Form from "./pages/Form";
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
