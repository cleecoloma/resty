import React, { useReducer } from 'react';
import './Form.scss';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'updateUrl':
      return { ...state, url: action.payload };
    case 'updateMethod':
      return { ...state, method: action.payload };
    case 'updateBody':
      return { ...state, body: action.payload };
    default:
      return state;
  }
};

function Form({ dispatch, loading}) {
  const [state, formDispatch] = useReducer(formReducer, {
    url: '',
    method: '',
    body: '',
  });

  const handleSubmit = () => {
    dispatch({
      type: 'updateRequest',
      payload: {
        url: state.url,
        method: state.method,
        body: state.body,
      },
    });
  };

  return (
    <div className='form-container'>
      <label>
        URL:
        <input
          type='text'
          value={state.method}
          onChange={(e) =>
            formDispatch({ type: 'updateMethod', payload: e.target.value })
          }
        />
      </label>
      <label>
        Request Method:
        <select
          value={state.method}
          onChange={(e) =>
            formDispatch({ type: 'updateMethod', payload: e.target.value })
          }
        >
          <option value=''>Select Method</option>
          <option value='get'>GET</option>
          <option value='post'>POST</option>
          <option value='put'>PUT</option>
          <option value='delete'>DELETE</option>
        </select>
      </label>
      {state.method === 'post' || state.method === 'put' ? (
        <label>
          Request Body (JSON):
          <textarea
            value={state.body}
            onChange={(e) =>
              formDispatch({ type: 'updateBody', payload: e.target.value })
            }
          />
        </label>
      ) : null}
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </div>
  );
}

export default Form;
