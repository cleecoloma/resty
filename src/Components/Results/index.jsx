import './Results.scss';

function Results({ response, loading }) {
  return (
    <div className="results-container">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <pre>{JSON.stringify(response, null, 2)}</pre>
      )}
    </div>
  );
}

export default Results;