import { predictGenre } from "../services/api";

const Header = () => {
  const predictGenres = async () => {
    const movie = await predictGenre("A movie about a girl who is a detective and she is trying to solve a murder case.");
    console.log(movie);
  };
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="containe is-max-desktop">
          <div className="columns is-centered">
            <div className="column has-text-centered">
              <h1 className="title is-1 publication-title">Multi-Class Genre Classification System Using BERT</h1>
              <div className="is-size-5 publication-authors">
                <span className="author-block">
                  <a href="https://www.linkedin.com/in/natnael-g-fisseha/" target="_blank" rel="noopener noreferrer">
                    Natnael G. Fisseha
                  </a>
                  <sup>1*</sup>
                </span>
              </div>
              <div className="is-size-5 publication-authors">
                <span className="author-block">
                  <sup>1</sup>University At Buffalo (SUNY)
                </span>
                <br />
                <span className="author-block gradient-text">
                  <button className="button is-normal is-rounded is-dark" onClick={() => predictGenres()}>
                    <span className="icon">
                      <i className="fas fa-globe"></i>
                    </span>
                    <span>try</span>
                  </button>
                </span>
              </div>

              <div className="column has-text-centered">
                <div className="publication-links">
                  <span className="link-block">
                    <a href="/demo" className="external-link button is-normal is-rounded is-dark">
                      <span className="icon">
                        <i className="fas fa-globe"></i>
                      </span>
                      <span>Demo</span>
                    </a>
                  </span>
                  {/* <span className="link-block">
                    <a href="https://arxiv.org/pdf/2406.18361.pdf" target="_blank" rel="noopener noreferrer"
                      className="external-link button is-normal is-rounded is-dark">
                      <span className="icon">
                        <i className="fas fa-file-pdf"></i>
                      </span>
                      <span>Arxiv Paper</span>
                    </a>
                  </span> */}
                  <span className="link-block">
                    <a href="https://github.com/nattygirma/EAS_501_Final_Project_Genre_Classification_model" target="_blank" rel="noopener noreferrer"
                      className="external-link button is-normal is-rounded is-dark">
                      <span className="icon">
                        <i className="fab fa-github"></i>
                      </span>
                      <span>Code</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </section>
  );
};

export default Header;