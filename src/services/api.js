const API_KEY = "f45864036313d94e90d3388ffbc07b7f";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${Math.floor(Math.random() * 10) + 1}`);
  const data = await response.json();
  const shuffledResults = data.results.sort(() => Math.random() - 0.5);
  return shuffledResults;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
