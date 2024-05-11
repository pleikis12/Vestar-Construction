import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Palanga from "./pages/Palanga.jsx";
import Klaipeda from "./pages/Klaipeda.jsx";
import Gargzdai from "./pages/Gargzdai.jsx";
import NoPage from "./pages/NoPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
