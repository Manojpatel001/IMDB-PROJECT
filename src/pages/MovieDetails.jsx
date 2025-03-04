import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchMovieDetails } from "../api";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const movieData = await fetchMovieDetails(id);
      setMovie(movieData);
    };
    getMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>

      {/* Home Button */}
      <Link to="/" className="btn btn-primary">🏠 Home</Link>
    </div>
  );
};

export default MovieDetails;
