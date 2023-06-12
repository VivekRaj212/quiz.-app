import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/HomePage/Home";
import Quiz from "./components/Quiz/Quiz";
import { Route, Routes } from "react-router-dom";
import Result from "./components/Result/Result";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
