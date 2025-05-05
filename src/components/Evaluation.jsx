const Evaluation = () => {
  return (
    <section className="">
      <div className="section conclusion-section">
        <div className="">
          <div className="">
            <h2 className="title is-2 gradient-text">Results & Analysis</h2>
            <h3 className="title is-4" style={{ marginTop: '2rem', marginBottom: '1rem' }}>
            Core Evaluation Metrics
            </h3>
            <table style={{
              margin: '1.2rem',
              marginTop: '0',
              width: '100%',
              background: 'white',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
              marginBottom: '2rem',
              overflow: 'hidden',
              borderCollapse: 'separate',
              borderSpacing: '0 0.5rem'
            }}>
              <thead style={{ background: '#f5f6fa' }}>
                <tr >
                  <th style={{ padding: '1em', fontSize: '1rem' }}>Metric</th>
                  <th style={{ padding: '1em', fontSize: '1rem' }}>Score</th>
                  <th style={{ padding: '1em', fontSize: '1rem' }}>Interpretation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '1em', fontSize: '1rem' }}>Top-1 Accuracy</td>
                  <td style={{ padding: '1em', fontSize: '1rem' }}>0.6319</td>
                  <td style={{ padding: '1em', fontSize: '1rem' }}>Top prediction matched at least one true genre in ~63% of cases</td>
                </tr>
                <tr>
                  <td style={{ padding: '1em', fontSize: '1rem' }}>Exact Match Accuracy</td>
                  <td style={{ padding: '1em', fontSize: '1rem' }}>0.3599</td>
                  <td style={{ padding: '1em', fontSize: '1rem' }}>Full genre set predicted correctly in ~36% of cases (very strict)</td>
                </tr>
                <tr>
                  <td style={{ padding: '1em', fontSize: '1rem' }}>Micro-F1 Score</td>
                  <td style={{ padding: '1em', fontSize: '1rem' }}>0.5653</td>
                  <td style={{ padding: '1em', fontSize: '1rem' }}>Balanced performance across all genre labels (precision & recall)</td>
                </tr>
                <tr>
                  <td style={{ padding: '1.2em', fontSize: '1rem' }}>Avg. Genre Accuracy</td>
                  <td style={{ padding: '1.2em', fontSize: '1rem' }}>0.8869</td>
                  <td style={{ padding: '1.2em', fontSize: '1rem' }}>High overall accuracy across individual genre predictions</td>
                </tr>
              </tbody>
            </table>

            <h3 className="title is-4" style={{ marginTop: '2rem', marginBottom: '1rem' }}>
            Multi-label Evaluation
            </h3>
            <ul style={{ 
              textAlign: 'left', 
              margin: '0 auto', 
              maxWidth: 700,
              listStyleType: 'disc',
              paddingLeft: '20px',
              fontSize: '1rem',
              lineHeight: '1.6',
              color: '#4a4a4a'
            }}>
              <li style={{ marginBottom: '1rem' }}>Many movies belong to 2–3 genres (e.g., Fantasy + Adventure + Action).</li>
              <li style={{ marginBottom: '1rem' }}>
                Your approach handles overlap using <b>sigmoid activation</b> + <b>top-k selection</b>, which:
                <ul style={{ 
                  marginTop: '0.5rem',
                  marginLeft: '1.5rem',
                  listStyleType: 'circle'
                }}>
                  <li style={{ marginBottom: '0.5rem' }}>Adapts per movie</li>
                  <li style={{ marginBottom: '0.5rem' }}>Avoids hard thresholds</li>
                </ul>
              </li>
              <li style={{ marginBottom: '1rem' }}>
                Multi-label performance is well-represented by <b>Top-1 accuracy</b> + <b>Micro-F1</b> rather than standard accuracy.
              </li>
            </ul>
          </div>
          <div>
            <img src="/static/images/d1.png" alt="Confusion Matrix" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evaluation;
