import React from 'react'
import Immutable from 'immutable'
import { Container } from 'src/components/app/Container.js'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const props = {
    project: Immutable.fromJS({})
  }

  const tree = renderer.create(
    <Container project={props.project} />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})