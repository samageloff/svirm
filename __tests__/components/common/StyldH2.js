import React from 'react'
import renderer from 'react-test-renderer'
import StyldH2 from 'src/components/common/styled/StyldH2.js'

it('renders correctly', () => {
  expect(<StyldH2>Boilerplate</StyldH2>).toMatchSnapshot()
})