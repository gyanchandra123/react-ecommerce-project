import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Routes, Route } from "react-router-dom";
function HatsPage() {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="hats" element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
  
