import React, { useState } from 'react';
import './Form.scss';

function Form({ request, setRequest, loading }) {
  const [url, setUrl] = useState(request.url);
  const [method, setMethod] = useState(request.method);
  const [body, setBody] = useState(request.body);

  const handleSubmit = () => {
    setRequest({ url, method, body });
  };

  return (
    <div className='form-container'>
      <label>
        URL:
        <input
          type='text'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </label>
      <label>
        Request Method:
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value='get'>GET</option>
          <option value='post'>POST</option>
          <option value='put'>PUT</option>
          <option value='delete'>DELETE</option>
        </select>
      </label>
      {method === 'post' || method === 'put' ? (
        <label>
          Request Body (JSON):
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </label>
      ) : null}
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </div>
  );
}

export default Form;
