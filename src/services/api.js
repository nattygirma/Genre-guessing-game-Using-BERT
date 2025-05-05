const API_KEY = import.meta.env.VITE_MOVIE_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = import.meta.env.VITE_API_URL;
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

export const predictGenre = async (movie) => {
  const response = await fetch(`${API_URL}/predict`, {
    method: 'POST',
    body: JSON.stringify(movie),
  });
  const data = await response.json();
  return data;
};
