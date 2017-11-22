import React from 'react'
import renderer from 'react-test-renderer'
import StyldDiv from 'src/components/common/styled/StyldDiv.js'

it('renders correctly', () => {
  expect(<StyldDiv>Boilerplate</StyldDiv>).toMatchSnapshot()
})