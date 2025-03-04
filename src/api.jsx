import axios from "axios";

const API_KEY = "86edfbbb";
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
  return response.data.Search || [];
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
  return response.data;
};
