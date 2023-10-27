import { render, screen } from '@testing-library/react';
import Header from './index';

test('Header component renders correctly', () => {
  render(<Header />);

  const headerText = screen.getByText(/RESTy/i);
  expect(headerText).toBeInTheDocument();
});

