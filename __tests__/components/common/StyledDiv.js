import React from 'react'
import StyledDiv from 'src/components/common/styled/StyledDiv.js'

it('renders correctly', () => {
  expect(<StyledDiv>Boilerplate</StyledDiv>).toMatchSnapshot()
})
