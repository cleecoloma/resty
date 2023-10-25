import './Results.scss';

function Results({ response, loading }) {
  return (
    <div className="results-container">
      {loading ? (
        <div className="loading">Loading...</div>
      ) :
        response ? (<pre>{JSON.stringify(response, null, 2)}</pre>) : null
      }
    </div>
  );
}

export default Results;