import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleRemove = (id) => {
    const updatedFavorites = favorites.filter((movie) => movie.imdbID !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container mt-4">
      <h1>My Favorite Movies</h1>
      
      {/* Home Button */}
      <Link to="/" className="btn btn-primary mb-3">🏠 Home</Link>

      {favorites.length === 0 ? <p>No favorites yet.</p> : (
        <div className="d-flex flex-wrap">
          {favorites.map((movie) => (
            <div key={movie.imdbID} className="card m-2" style={{ width: "18rem" }}>
              <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <button className="btn btn-danger" onClick={() => handleRemove(movie.imdbID)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
