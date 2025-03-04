import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, onFavorite }) => {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Year}</p>
        <Link to={`/movie/${movie.imdbID}`} className="btn btn-primary">
          Details
        </Link>
        <button className="btn btn-warning ms-2" onClick={() => onFavorite(movie)}>
          Add to Favorites
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
