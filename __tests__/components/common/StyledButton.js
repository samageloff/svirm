import React from 'react'
import StyledButton from 'src/components/common/styled/StyledButton.js'

it('renders correctly', () => {
  expect(<StyledButton>Boilerplate</StyledButton>).toMatchSnapshot()
})
