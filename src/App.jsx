import './App.scss';
import React, { useReducer, useEffect } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import History from './Components/History';
import Results from './Components/Results';
import Footer from './Components/Footer';
import axios from 'axios';

const appReducer = (state, action) => {
  switch (action.type) {
    case 'updateRequest':
      return { ...state, request: action.payload };
    case 'updateResponse':
      return { ...state, response: action.payload };
    case 'updateLoading':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(appReducer, {
    request: {
      method: '',
      url: '',
      body: '',
    },
    response: null,
    loading: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'updateLoading', payload: true });
        const response = await axios({
          method: state.request.method,
          url: state.request.url,
          data: state.request.body,
        });
        const { data, headers } = response;
        dispatch({ type: 'updateResponse', payload: { data, headers } });
      } catch (error) {
        console.error(error);
      } finally {
        dispatch({ type: 'updateLoading', payload: false });
      }
    };

    if (state.request.method || state.request.url || state.request.body) {
      fetchData();
    }
  }, [state.request]);

  return (
    <div className='App'>
      <Header />
      <div className='container'>
          <Form dispatch={dispatch} loading={state.loading} />
          <History />
          <Results response={state.response} loading={state.loading} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
