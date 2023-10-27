import React from 'react';
import { render } from '@testing-library/react';
import History from './index';

describe('History Component', () => {
  it('renders without errors', () => {
    const historyArray = [
      {
        url: 'https://example.com',
        method: 'GET',
        response: {
          headers: { 'Content-Type': 'application/json' },
          data: { message: 'Hello, World!' },
        },
      },
    ];

    const { getByText } = render(<History historyArray={historyArray} />);

    // Check if the component renders the URL
    expect(getByText('URL = https://example.com')).toBeInTheDocument();

    // Check if the component renders the method in uppercase
    expect(getByText('Method = GET')).toBeInTheDocument();

    // Check for Response Headers and Data
    expect(getByText('Response Headers:')).toBeInTheDocument();
    expect(getByText('Response Data:')).toBeInTheDocument();
  });
});
