import { render, screen } from '@testing-library/react';
import History from './index';

test('History component renders correctly', () => {
  render(<History />);

  const headerText = screen.getByText(/RESTy/i);
  expect(headerText).toBeInTheDocument();
});

