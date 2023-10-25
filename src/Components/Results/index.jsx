import './Results.scss';

function Results({ response, loading }) {
  return (
    <div className='results-container'>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : response ? (
        <div>
          <h2>Response Headers:</h2>
          <pre>{JSON.stringify(response.headers, null, 2)}</pre>
          <h2>Response Data:</h2>
          <pre>{JSON.stringify(response.data, null, 2)}</pre>
        </div>
      ) : null}
    </div>
  );
}

export default Results;