
import './Motivation.css';

const Motivation = () => {
  return (
    <section className="section hero">
    <div className="container is-max-desktop">
      <div className="columns is-centered has-text-cered">
        <div className="column is-four-fifths">
    <div className="intro-container">
    <h2 className="title is-2 gradient-text">Introduction & Objectives</h2>
      
      <div className="section">
        <h3 className="title is-3 gradient-text">Project Motivation</h3>
        <p>
          Movie genres are key for recommendation and discovery. However, many movies belong to multiple genres, making single-label classification insufficient.
          Multi-label genre classification helps build smarter tagging and search systems.
        </p>
      </div>

      <div className="section">
        <h3 className="title is-3 gradient-text">Project Goals</h3>
        <ul className="text" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>Build a deep learning model to predict multiple genres from movie plots.</li>
          <li>Compare architectures like LSTM and BERT-based models.</li>
          <li>Use Top-k accuracy and multi-label metrics (F1, precision, recall).</li>
          <li>Deploy using Docker and AWS ECS for real-time predictions.</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</div>
</section>
  );
};

export default Motivation;
