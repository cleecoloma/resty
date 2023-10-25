import './App.scss';
import React, { useState } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Results from './Components/Results';
import Footer from './Components/Footer';
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

      const response = await axios({
        method: request.method,
        url: request.url,
        data: request.body,
      });

      setResponse(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <Form
          request={request}
          setRequest={setRequest}
          handleRequest={handleRequest}
          loading={loading}
        />
        <Results response={response} loading={loading} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
