import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, updateFavorites }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleAddToFavorites = (movie) => {
    const updatedFavorites = [...favorites];

    // Prevent duplicates
    if (!updatedFavorites.some((fav) => fav.imdbID === movie.imdbID)) {
      updatedFavorites.push(movie);
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      updateFavorites(updatedFavorites); // 🔄 Update favorites in parent component
    }
  };

  return (
    <div className="d-flex flex-wrap">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onFavorite={handleAddToFavorites} />
      ))}
    </div>
  );
};

export default MovieList;
