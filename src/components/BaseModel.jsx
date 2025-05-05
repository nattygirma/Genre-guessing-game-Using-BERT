const BaseModel = () => {

  return (
    <section className="section hero">
      <div className="container is-max-desktop">
        <div className="columns is-centered has-text-centered">
          <div className="column is-four-fifths">
            <h2 className="title is-2 gradient-text">Base Model: LSTM</h2>
            <h6 className="title is-6" style={{ textAlign: 'left' }}>
            I used an LSTM-based model because it can capture the sequential structure of movie plots, helping to identify key contextual patterns important for multi-label genre classification.
            </h6>
            <p style={{ textAlign: 'left' }}>
              <b> Tokenizer</b>: BERT tokenizer (WordPiece-based subword tokenization)<br />
              <b> Dropout Regularization</b>: Applied a dropout rate of 0.3 after the LSTM output<br />
              <b> Optimizer</b>: Optimizer: Adam optimizer with an initial learning rate of 2e-4<br />
              <b> Loss function</b>: Binary Cross Entropy Loss, suitable for multi-label prediction tasks<br />
            </p>
            <div className="hero-body">
              <img src="/static/images/model2.png" alt="Stability Evaluation" width="1000" />
              <h2 className="subtitle has-text-centered">Figure 2. BaseModel Architecture</h2>
            </div>
          </div>
          
        </div>
        <div className="margin-top">
          <div className="container padding-top-bottom">
            <div className="columns is-centered has-text-centered">
              <div className="column is-four-fifths">


              <div className="item item1" style={{ textAlign: 'center' }}>
                <img src="/static/images/c2.png" alt="Reverse Process 1" width="600" />
              </div>
              <p className="discussion columns is-centered" style={{ textAlign: 'left' }}>
                <ul style={{ margin: 0, paddingLeft: '1.2em' }}>
                  <li><b>Top-1 Accuracy (~0.55):</b> The LSTM model correctly predicts the primary genre for over half of the movies, showing reasonable understanding of main genre context.</li>
                  <li><b>Precision (~0.50):</b> When the model predicts a genre, it is correct about half the time, indicating moderate reliability in its positive predictions.</li>
                  <li><b>Recall (~0.41):</b> The model retrieves about 41% of all actual genres, meaning it misses a significant number of true genres, possibly due to class imbalance or complexity.</li>
                  <li><b>F1 Score (~0.46):</b> The F1 score reflects a balance between precision and recall, highlighting that the model is decent but struggles to achieve both high precision and recall.</li>
                  <li><b>Overall Insight:</b> The LSTM model provides a solid baseline, but the gap between precision and recall suggests further tuning or advanced models (like transformers) could improve performance.</li>
                </ul>
              </p>
              </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaseModel;