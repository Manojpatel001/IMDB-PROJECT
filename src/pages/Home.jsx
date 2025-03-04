import React, { useState, useEffect } from "react";
import { fetchMovies } from "../api";
import MovieList from "../components/MovieList";
import { Link } from "react-router-dom";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query.length > 2) {
      const results = await fetchMovies(query);
      setMovies(results);
    } else {
      setMovies([]);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">IMDB Clone</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />
      
      {/* View Favorites Button */}
      <div className="mt-3">
        <Link to="/favorites" className="btn btn-success">⭐ View Favorites ({favorites.length})</Link>
      </div>

      <MovieList movies={movies} updateFavorites={setFavorites} />
    </div>
  );
}

export default Home;
