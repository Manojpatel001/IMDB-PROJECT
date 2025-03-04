import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "./styles.css"; // Import Custom CSS

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">🎬 Mini IMDb</a>
          <div className="navbar-nav">
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/favorites">Favorites</a>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
