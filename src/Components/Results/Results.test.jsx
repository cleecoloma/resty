import { render, screen } from '@testing-library/react';
import Results from './index';

test('Results component renders correctly', () => {
  const response = {
    headers: { 'Content-Type': 'application/json' },
    data: { key: 'value' },
  };
  const loading = false;

  render(<Results response={response} loading={loading} />);

  const headersText = screen.getByText(/Response Headers:/i);
  const dataText = screen.getByText(/Response Data:/i);
  
  expect(headersText).toBeInTheDocument();
  expect(dataText).toBeInTheDocument();
});

test('Results component displays loading message', () => {
  const response = null;
  const loading = true;

  render(<Results response={response} loading={loading} />);

  const loadingText = screen.getByText(/Loading.../i);
  expect(loadingText).toBeInTheDocument();
});
