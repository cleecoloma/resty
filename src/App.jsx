import React, { useState } from 'react';

import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention.
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

function App() {
  const [requestData, setRequestData] = useState();
  const [responseData, setResponseData] = useState();

  return (
    <>
      <Header />
      {/* <div>Request Method: {this.state.requestParams.method}</div>
      <div>URL: {this.state.requestParams.url}</div> */}
      <Form />
      <Results />
      <Footer />
    </>
  );
}

export default App;
