import './App.scss';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import History from './Components/History';
import Results from './Components/Results';
import Footer from './Components/Footer';
import axios from 'axios';

function App() {
  const [request, setRequest] = useState({
    method: '',
    url: '',
    body: '',
  });
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios({
          method: request.method,
          url: request.url,
          data: request.body,
        });
        const { data, headers } = response;
        setResponse({ data, headers });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (request.method || request.url || request.body) {
      fetchData();
    }
  }, [request]);

  return (
    <div className='App'>
      <Header />
      <div className='container'>
          <Form request={request} setRequest={setRequest} loading={loading} />
          <History />
          <Results response={response} loading={loading} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
