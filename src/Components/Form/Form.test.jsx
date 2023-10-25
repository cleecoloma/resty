import { render, screen } from '@testing-library/react';
import Form from './index';

const handleRequestMock = async () => {
};

test('Form component renders correctly', () => {
  const request = {
    method: 'get',
    url: '',
    body: '',
  };
  const setRequest = () => {};
  const loading = false;

  render(
    <Form
      request={request}
      setRequest={setRequest}
      handleRequest={handleRequestMock}
      loading={loading}
    />
  );
  
  const urlInput = screen.getByLabelText(/URL/i);
  const methodSelect = screen.getByLabelText(/Request Method:/i);
  const submitButton = screen.getByText(/Submit/i);

  expect(urlInput).toBeInTheDocument();
  expect(methodSelect).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

