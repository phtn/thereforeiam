import React from 'react';
import App from './App';

import { render } from 'react-testing-library'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'

it('renders the Navbar', ()=> {
  const { getByText } = render(<App/>)
  // expect(getByText('exploring react-spring')).toBeInTheDocument()
})




