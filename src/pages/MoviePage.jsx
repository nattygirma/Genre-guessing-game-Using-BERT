import { useParams } from "react-router-dom";
import "../css/Favorites.css";
import { useEffect, useState } from "react";
import GenreGame from '../components/GenreGame.jsx';

function Favorites() {

  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isGameOpen, setIsGameOpen] = useState(false);



  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f45864036313d94e90d3388ffbc07b7f`);
      const data = await response.json();
      console.log(data);
      setMovie(data);
    }
    fetchMovie();
  }, [id]);



    return (
      <div className="outer-container">
      <div className="favorites">
<div className="movie-card1 ">
  
  <div className="container">
    
    {/* <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="cover" className="cover" /> */}
        
    <div className="hero" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie?.poster_path})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            
      <div className="details">
        <div className="detail">  
      
        <div className="title1">{movie?.title} <span>{movie?.vote_average}/10</span></div>

        <div className="title2">{movie?.tagline}</div>    
        
        <fieldset className="rating">
    <input type="radio" id="star5" name="rating" value="5" checked={movie?.vote_average >= 9.5} /><label className="full" title="Awesome - 5 stars"></label>
    <input type="radio" id="star4half" name="rating" value="4.5" checked={movie?.vote_average >= 8.5 && movie?.vote_average < 9.5} /><label className="half" title="Pretty good - 4.5 stars"></label>
    <input type="radio" id="star4" name="rating" value="4" checked={movie?.vote_average >= 7.5 && movie?.vote_average < 8.5} /><label className="full" title="Pretty good - 4 stars"></label>
    <input type="radio" id="star3half" name="rating" value="3.5" checked={movie?.vote_average >= 6.5 && movie?.vote_average < 7.5} /><label className="half" title="Meh - 3.5 stars"></label>
    <input type="radio" id="star3" name="rating" value="3" checked={movie?.vote_average >= 5.5 && movie?.vote_average < 6.5} /><label className="full" title="Meh - 3 stars"></label>
    <input type="radio" id="star2half" name="rating" value="2.5" checked={movie?.vote_average >= 4.5 && movie?.vote_average < 5.5} /><label className="half" title="Kinda bad - 2.5 stars"></label>
    <input type="radio" id="star2" name="rating" value="2" checked={movie?.vote_average >= 3.5 && movie?.vote_average < 4.5} /><label className="full" title="Kinda bad - 2 stars"></label>
    <input type="radio" id="star1half" name="rating" value="1.5" checked={movie?.vote_average >= 2.5 && movie?.vote_average < 3.5} /><label className="half" title="Meh - 1.5 stars"></label>
    <input type="radio" id="star1" name="rating" value="1" checked={movie?.vote_average >= 1.5 && movie?.vote_average < 2.5} /><label className="full" title="Sucks big time - 1 star"></label>
    <input type="radio" id="starhalf" name="rating" value="0.5" checked={movie?.vote_average < 1.5} /><label className="half" title="Sucks big time - 0.5 stars"></label>
  </fieldset>
        
        <span className="likes">{movie?.vote_count} likes</span>
        
      </div> 
      </div>
      
    </div> 
    
    <div className="description movie-details">
      
      <div className="column1">
      <p className="genre-title">Guess the Genre</p>
      <div style={{ textAlign: 'center', padding: '1rem' }}>
        <button 
          onClick={() => setIsGameOpen(true)}
          style={{
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
        >
          Play Genre Game
        </button>
      </div>
      </div>
      <div className="column2">
        
        <p>{movie?.overview}</p>
              
      </div> 
    </div> 
   
  </div> 
</div> 
      </div>
            


      <GenreGame 
        isOpen={isGameOpen} 
        movie={movie}
        onClose={() => setIsGameOpen(false)} 
      />
      </div>
    );
}

export default Favorites;
