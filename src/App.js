import './App.css';
import Contador from './pages/contador'
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home";
import Courses from "../src/pages/courses";
import Live from "../src/pages/live";
import Contact from "../src/pages/contact";

function App() {
  return (
    <div className="App">
      <div className="container link-color">
        <nav>
          <ul>
            <Link to="/" class="list">
              Home
            </Link>
            <Link to="/course" class="list">
              Courses
            </Link>
            <Link to="/live" class="list">
              Live course
            </Link>
            <Link to="/contact" class="list">
              Contact
            </Link>
            <Link to="/contador" class="list">
              Contador
            </Link>
          </ul>
        </nav>

        {/* Defining routes path and rendering components as element */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/live" element={<Live />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contador" element={<Contador />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
