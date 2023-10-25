import { render, screen, describe } from '@testing-library/react';
import App from '../App';

test('renders the App component', () => {
  render(<App />);

  const headerElement = screen.getByText(/RESTy/i);
  expect(headerElement).toBeInTheDocument();
});
