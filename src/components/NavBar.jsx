import { Link } from "react-router-dom";
import "../css/Navbar.css"
import PropTypes from 'prop-types';

function NavBar({handleSearch, searchQuery, setSearchQuery}) {
    return <nav className="navbar">
        <div className="navbar-brand">
        <a href="https://github.com/nattygirma/EAS_501_Final_Project_Genre_Classification_model/tree/main/colab_notebooks" target="_blank" rel="noopener noreferrer" className="nav-link">GITHUB</a>
        <Link to="/" className="nav-link">DOCUMENTATION</Link>
        </div>
        <div className="navbar-links">

                  <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
        </div>
    </nav>
}

NavBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired
};

export default NavBar