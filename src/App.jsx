import './App.scss';
import React, { useState } from 'react';
import Form from './Components/Form';
import Results from './Components/Results';
import axios from 'axios';

function App() {
  const [request, setRequest] = useState({
    method: 'get',
    url: '',
    body: '',
  });
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRequest = async () => {
    try {
      setLoading(true);

      // Use Axios to make the API request.
      const response = await axios({
        method: request.method,
        url: request.url,
        data: request.body,
        // Add headers and other configuration as needed.
      });

      setResponse(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Form
        request={request}
        setRequest={setRequest}
        handleRequest={handleRequest}
        loading={loading}
      />
      <Results response={response} loading={loading} />
    </div>
  );
}

export default App;
