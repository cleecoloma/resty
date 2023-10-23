import { useState } from 'react';
import './Form.scss';

function Form(props) {
  const [formData, setFormData] = useState({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleApiCall(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name='url' type='text' />
          <button type='submit'>GO!</button>
        </label>
        <label className='methods'>
          <span id='get'>GET</span>
          <span id='post'>POST</span>
          <span id='put'>PUT</span>
          <span id='delete'>DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;

// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (

//     );
//   }
// }

// export default Form;
