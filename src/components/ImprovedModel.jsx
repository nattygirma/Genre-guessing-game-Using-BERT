import Steps from './Steps';
const ImprovedModel = () => {
  return (
    <section className="section hero">
      <div className="container is-max-desktop">
        <div className="columns is-centered has-text-centered">
          <div className="column is-four-fifths">
            <h2 className="title is-2 gradient-text">Improved Model: BertGenreClassifier</h2>
            <h6 className="title is-6" style={{ textAlign: 'left' }}>
            I used a BERT-based model because it effectively captures the semantic meaning of movie plots, enabling accurate multi-label genre classification from complex text descriptions.
            </h6>
            <p style={{ textAlign: 'left' }}>
              <b> Based on</b>: BERT-base-uncased (pretrained transformer model)<br />
              <b> Dropout layer</b>: 0.3 dropout rate for regularization<br />
              <b> Optimizer</b>: AdamW<br />
              <b> Loss function</b>: Binary Cross Entropy<br />
            </p>
            <Steps />
            <div className="hero-body">
              <img src="/static/images/model.png" alt="Stability Evaluation" width="300" />
              <h2 className="subtitle has-text-centered"><b>Figure 3. Improved Model Architecture</b></h2>
            </div>
  
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImprovedModel;