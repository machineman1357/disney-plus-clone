import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Detail from "./components/Detail.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login.js";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/details" element={<Detail />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
