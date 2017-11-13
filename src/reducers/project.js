import Immutable from 'immutable'

import {
  UPDATE_PROJECT
} from '../actions/project'

const defaultProjectState = Immutable.fromJS({
  data: {
    selectors: true,
    otherStuff: {
      yes: true,
      no: false
    }
  }
})

const project = (state = defaultProjectState, action) => {
  switch (action.type) {
    case UPDATE_PROJECT:
      return state.withMutations(map => {
        map.set('data', Immutable.fromJS(action.project))
      })
    default:
      return state
  }
}

export default project
