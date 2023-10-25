import './Results.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

function Results({ response, loading }) {
  return (
    <div className='results-container'>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : response ? (
        <div>
          <h2>Response Headers:</h2>
          <JSONPretty id='json-pretty-headers' data={response.headers} />
          <h2>Response Data:</h2>
          <JSONPretty id='json-pretty-data' data={response.data} />
        </div>
      ) : null}
    </div>
  );
}

export default Results;
