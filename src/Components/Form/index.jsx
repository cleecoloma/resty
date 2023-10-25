import './Form.scss';

function Form({ request, setRequest, handleRequest, loading }) {
  return (
    <div className='form-container'>
      {' '}
      <label>
        URL: 
        <input
          type='text'
          value={request.url}
          onChange={(e) => setRequest({ ...request, url: e.target.value })}
        />
      </label>
      <label>
        Request Method:
        <select
          value={request.method}
          onChange={(e) => setRequest({ ...request, method: e.target.value })}
        >
          <option value='get'>GET</option>
          <option value='post'>POST</option>
          <option value='put'>PUT</option>
          <option value='delete'>DELETE</option>
        </select>
      </label>
      {request.method === 'post' || request.method === 'put' ? (
        <label>
          Request Body (JSON):
          <textarea
            value={request.body}
            onChange={(e) => setRequest({ ...request, body: e.target.value })}
          />
        </label>
      ) : null}
      <button onClick={handleRequest} disabled={loading}>
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </div>
  );
}

export default Form;
