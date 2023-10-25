import { render, screen } from '@testing-library/react';
import Footer from './index';

test('Footer component renders correctly', () => {
  render(<Footer />);

  // Perform assertions to check if the component renders as expected
  const footerElement = screen.getByText(/© 2023/i);
  expect(footerElement).toBeInTheDocument();
});
