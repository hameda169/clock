import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders correct elements', () => {
  const {container} = render(<App />);

  expect(container.querySelector('svg')).toBeInTheDocument();
});
