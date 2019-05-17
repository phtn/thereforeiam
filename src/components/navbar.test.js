import React from 'react'
import 'jest-dom/extend-expect'
// import 'react-hooks-testing-library'
import 'react-testing-library/cleanup-after-each'

import { render } from 'react-testing-library'
import Navbar from './navbar'

describe('Navbar Test', ()=> {
  it('renders', ()=> {
    const { getByText } = render(<Navbar/>)
    // expect(getByText('exploring react-spring')).toBeInTheDocument()
  })
})
