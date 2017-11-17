import React from 'react'
import renderer from 'react-test-renderer'
import StyledH1 from 'src/components/common/StyledH1.js'

it('renders correctly', () => {
  expect(<StyledH1>Boilerplate</StyledH1>).toMatchSnapshot()
})