import React from 'react';
import { render } from '@testing-library/react';
import Clock from '.';

test('renders correct elements', () => {
  const {container} = render(<Clock second={10} minute={20} hour={9} />);
  const svgContainer = container.querySelector('svg')!;

  expect(svgContainer.querySelectorAll('line').length).toBe(3);
  expect(svgContainer.querySelectorAll('ellipse').length).toBe(1);
});
