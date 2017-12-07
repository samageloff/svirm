import React from 'react'
import Container from 'src/components/app/Container.js'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <Container />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})
