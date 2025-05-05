
const FutureWork = () => {
  return (
    <section className="section conclusion-section">

              <div className="flex-row columns is-entered margin-top-5 sub-section">
                <div className="flex-item flex-column">
            <h1 className="title is-1" style={{ marginLeft: '5rem' }}>Model Deployment</h1>
            {/* <hr/> */}
          </div>
        </div>
        <div className="flex-row">
          
          <div className="flex-item flex-item-stretch flex-column">
            <img className="image" src="/static/images/c44.png"/>
          </div>
          <div className="flex-item flex-item-stretch flex-column">
            <p className="text">
            <ul className="text" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li>Docker was used to containerize the model and its dependencies for consistent, reproducible environments.</li>
              <li>The Docker image includes:
                <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                  <li>Trained model weights</li>
                  <li>Tokenizer and genre encoder</li>
                  <li>Inference API built using FastAPI</li>
                </ul>
              </li>
              <li>The container was deployed using AWS Elastic Container Service (ECS) for scalable and managed hosting.</li>
            </ul>
            </p>
          </div>
        </div>
        <div className="flex-row columns is-centered">
          <div className="flex-item flex-column column is-four-fifths">
            <h1 className="title is-1 sub-section" >Discussion & Future Work</h1>
            <ul className="text" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li>Traditional metrics like accuracy or F1-score can be misleading in multi-label classification — a model can miss some labels even when partially correct.</li>
              <li>Model overfitting was a challenge: despite good training loss, validation performance degraded after a few epochs.</li>
              <li>Genre co-occurrence is non-trivial: some genres (e.g. Action and Adventure) often appear together, which may confuse the model.</li>
              <li>Incorporating movie metadata like cast, director, and release year could improve classification accuracy</li>
            </ul>
          </div>
        </div>
            <img className="image" src="/static/images/r.gif"/>



    </section>
  );
};

export default FutureWork;