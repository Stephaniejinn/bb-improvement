import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Home from "./page/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
