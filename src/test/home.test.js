

import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../components/home/home'

test('Should render the home component', () => {
  const result =  render(<Home/>)
  expect(result.container.querySelector('#home')).toBeTruthy();
})