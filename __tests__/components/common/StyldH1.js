import React from 'react'
import renderer from 'react-test-renderer'
import StyldH1 from 'src/components/common/styled/StyldH1.js'

it('renders correctly', () => {
  expect(<StyldH1>Boilerplate</StyldH1>).toMatchSnapshot()
})