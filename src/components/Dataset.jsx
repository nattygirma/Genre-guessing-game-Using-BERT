import { useEffect } from 'react';
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';

const Dataset = () => {
  useEffect(() => {
    // Initialize carousel
    bulmaCarousel.attach('#results-carousel', {
      slidesToScroll: 1,
      slidesToShow: 1,
      pagination: false,
      infinite: false,
      autoplay: false
    });
  }, []);
  return (
    <section className="section hero is-light">
      <div className="container is-max-desktop ">
        <div className="columns is-centered margin">
          <div className="column is-four-fifths">
            <div className="has-text-centered">
            <h2 className="title is-2 gradient-text">Dataset</h2>
            <div className="margin-top-5">
            <h5 className="title is-5" style={{ textAlign: 'left' }}>
              Details of the dataset used in the paper.
            </h5>
            </div>
            <div className="points left-aligned">
            <p>
             - The dataset was obtained from Kaggle: <a target="_blank" rel="noopener noreferrer" href="https://www.kaggle.com/datasets/rajugc/imdb-movies-dataset-based-on-genre">IMDB Movies Dataset Based on Genre</a>  
            </p>
            <span className="small-text" style={{ marginTop: '-5px', marginLeft: '20px', display: 'block' }}>Open-access, available for educational use</span>
            <p className="margin-top">
              - The dataset contains 357,404 movies with 357,404 rows and 15 columns.
            </p>
            </div>
            <p className="margin-top">

            </p>

            
            <div className="hero-body">
              <img src="/static/images/a1.png" alt="movies dataset" width="1200" />
              <h6 className="subttle has-text-centered"><b>Row dataset after removing non-relevant columns.</b></h6>
            </div>
            </div>

            <div className="margin-top-5">
              <div className="margin-top">
            <h5 className="title is-5" style={{ textAlign: 'left' }}>
            Dataset Preprocessing
            </h5>
            </div>
            <div className="points left-aligned">
            <p className="margin-top">
              Removed duplicate rows with same movie name and year.
            </p>
            
            <p className="margin-top">
              Removed genres with small number of movies. <span className="small-text">(Eg: Film-Noir: 844, News: 21, Game-Show: 6, Talk-Show: 5, Adult: 5, Short: 2...)</span>
            </p>
            <p className="margin-top">
              Cleaned the plot column by removing the special characters and extra spaces.
            </p>
            <p className="margin-top">
              Balanced the dataset by removing some movies from the genres with more movies.
              </p>
              <p className="margin-top align-right">
              <a href="https://github.com/nattygirma/EAS_501_Final_Project_Genre_Classification_model/blob/main/colab_notebooks/data_Preprocessing_.ipynb" target="_blank" rel="noopener noreferrer" >Dataset Colab Notebook Link</a>
              </p>
              </div>
            
           
              <img className="margin-top" src="/static/images/a2.png" alt="movies dataset" width="1200" />
              <p className="subtile has-text-centered"><b>Row dataset after removing non-relevant columns.</b></p>
            </div>
          
          </div>
        </div>
        <div className="margin-top-5">
          <div className="container padding-top-bottom">
            <div id="results-carousel" className="carousel results-carousel">
              <div className="item item1" style={{ textAlign: 'center' }}>
                <img src="/static/images/dataset-before.png" alt="Reverse Process 1" width="700" />
              </div>
              <div className="item item2" style={{ textAlign: 'center' }}>
                <img src="/static/images/dataset-after.png" alt="Reverse Process 2" width="700" />
              </div>
            </div>
            <h4 className="subtitle has-text-centered" >Figure 1. Genre Distribution before and after preprocessing.</h4>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Dataset;