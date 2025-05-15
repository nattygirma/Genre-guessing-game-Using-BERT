import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './GenreGame.css';
import PropTypes from 'prop-types';

const GenreGame = ({ isOpen, onClose, movie }) => {
  const navigate = useNavigate();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userScore, setUserScore] = useState(() => {
    const savedScore = localStorage.getItem('userScore');
    return savedScore ? parseInt(savedScore) : 0;
  });
  const [aiScore, setAiScore] = useState(() => {
    const savedScore = localStorage.getItem('aiScore');
    return savedScore ? parseInt(savedScore) : 0;
  });
  const [aiGuesses, setAiGuesses] = useState([]);
  const [showResult, setShowResult] = useState(false);

  // Update localStorage when scores change
  useEffect(() => {
    localStorage.setItem('userScore', userScore);
  }, [userScore]);

  useEffect(() => {
    localStorage.setItem('aiScore', aiScore);
  }, [aiScore]);

  const genres = [
    'Action', 'Comedy', 'Drama', 'Horror', 'Romance',
    'Sci-Fi', 'Thriller', 'Documentary', 'Animation', 'Fantasy',
    'Adventure', 'Family'
  ];

  const normalizeGenre = (genre) => {
    const genreMap = {
      'Science Fiction': 'Sci-Fi',
      'Sci-Fi': 'Sci-Fi',
      'Documentary': 'Documentary',
      'Biography': 'Documentary'
    };
    return genreMap[genre] || genre;
  };

  //? handle genre select
  const handleGenreSelect = (genre) => {
    setSelectedGenres(prev => {
      if (prev.includes(genre)) {
        return prev.filter(g => g !== genre);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, genre];
    });
  };

  const apiUrl = import.meta.env.VITE_API_URL; 
  console.log("apiUrl", apiUrl);


  const handleSubmit = async () => {
    if (selectedGenres.length === 0) return;
    
    setIsLoading(true);
    setShowResult(false);

    
    try {
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: movie.overview
        })
      });

      const data = await response.json();
      console.log("data received", data);
      const topGenres = Object.entries(data.genres)
        .sort(([, a], [, b]) => b - a)
        .slice(0, selectedGenres.length)
        .map(([genre, probability]) => ({
          name: genre,
          probability: Math.round(probability * 100)
        }));
      
      setAiGuesses(topGenres);
      setIsLoading(false);
      setShowResult(true);

      // Check user's guesses
      const userCorrectGuesses = selectedGenres.filter(genre => 
        movie.genres.some(g => normalizeGenre(g.name) === normalizeGenre(genre))
      ).length;
      setUserScore(prev => prev + userCorrectGuesses);

      // Check AI's guesses
      const aiCorrectGuesses = topGenres.filter(guess => 
        movie.genres.some(g => normalizeGenre(g.name) === normalizeGenre(guess.name))
      ).length;
      setAiScore(prev => prev + aiCorrectGuesses);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
    }
  };

  const handlePlayAgain = () => {
    setSelectedGenres([]);
    setAiGuesses([]);
    setShowResult(false);
    navigate('/demo');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#2c3e50',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>Are you better than AI?</h2>
        <p style={{
          fontSize: '1.2rem',
          color: '#7f8c8d',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>Select up to 3 genres and compete with the AI to see who can guess the most genres correctly!</p>
        
        <div className="score-display" style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <div style={{
            backgroundColor: '#3498db',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            color: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}>Your Score: {userScore}</div>
          <div style={{
            backgroundColor: '#FFD700',
            padding: '0.5rem 1rem', 
            borderRadius: '5px',
            color: '#000',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}>AI&apos;s Score: {aiScore}</div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '1rem', color: '#7f8c8d' }}>
          Selected: {selectedGenres.length}/3 genres
        </div>

        <div className="genre-grid">
          {genres.map((genre) => (
            <button
              key={genre}
              className={`genre-button ${selectedGenres.includes(genre) ? 'selected' : ''}`}
              onClick={() => handleGenreSelect(genre)}
              disabled={!selectedGenres.includes(genre) && selectedGenres.length >= 3}
              style={{
                opacity: !selectedGenres.includes(genre) && selectedGenres.length >= 3 ? 0.5 : 1
              }}
            >
              {genre}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>AI is thinking...</p>
          </div>
        ) : showResult ? (
          <div className="result">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
              <div>
                <p>Your guesses:</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {selectedGenres.map(genre => {
                    const isCorrect = movie.genres.some(g => normalizeGenre(g.name) === normalizeGenre(genre));
                    return (
                      <div 
                        key={genre}
                        style={{
                          backgroundColor: '#3498db',
                          padding: '0.5rem 1rem',
                          borderRadius: '5px',
                          color: '#fff',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        {genre}
                        {isCorrect && <span style={{borderRadius: '50%', backgroundColor: 'white', color: 'black', padding: '0.12rem 0.3rem' }}>+1</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <p>AI guesses:</p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {aiGuesses.map(guess => {
                    const isCorrect = movie.genres.some(g => normalizeGenre(g.name) === normalizeGenre(guess.name));
                    if (guess.name === 'Biography') {
                      guess.name = 'Documentary';
                    }else if (guess.name === 'Science Fiction') {
                      guess.name = 'Sci-Fi';
                    }
                    return (
                      <div 
                        key={guess.name}
                        style={{
                          backgroundColor: '#FFD700',
                          padding: '0.5rem 1rem',
                          borderRadius: '5px',
                          color: '#000',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        {guess.name} ({guess.probability}%)
                        {isCorrect && <span style={{borderRadius: '50%', backgroundColor: 'white', color: 'black', padding: '0.12rem 0.3rem' }}>✓</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <p>Correct genres:</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {movie.genres.map(genre => (
                <div 
                  key={genre.id}
                  style={{
                    backgroundColor: '#ffff',
                    padding: '0.5rem 1rem',
                    borderRadius: '5px',
                    color: '#000',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                  }}
                >
                  {genre.name}
                </div>
              ))}
            </div>
            <button onClick={handlePlayAgain}>Play Again with a random movie</button>
          </div>
        ) : (
          <button 
            className="submit-button"
            onClick={handleSubmit}
            disabled={selectedGenres.length === 0}
          >
            Submit
          </button>
        )}

        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

GenreGame.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default GenreGame; 