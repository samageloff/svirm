import React from 'react'
import Immutable from 'immutable'
import { Container } from 'src/components/app/Container.js'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const props = {
    actions: {
      startTimer: () => {},
      stopTimer: () => {}
    },
    project: Immutable.fromJS({})
  }

  const tree = renderer.create(
    <Container project={props.project} actions={props.actions} />
  ).toJSON()

  expect(tree).toMatchSnapshot()
})