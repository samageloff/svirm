import Immutable from 'immutable'

import {
  UPDATE_PROJECT,
  TIMER_START,
  TIMER_TICK,
  TIMER_STOP
} from '../actions/project'

const defaultProjectState = Immutable.fromJS({
  data: {
    selectors: true,
    otherStuff: {
      yes: true,
      no: false
    },
    timer: {
      start: false,
      stop: true,
      tick: null
    }
  }
})

const project = (state = defaultProjectState, action) => {
  switch (action.type) {
    case UPDATE_PROJECT:
      return state.withMutations(map => {
        map.set('data', Immutable.fromJS(action.project))
      })
    case TIMER_START:
      return state.withMutations(map => {
        map.setIn(['data', 'timer', 'start'], Immutable.fromJS(action.project))
      })
    case TIMER_TICK:
      return state.withMutations(map => {
        map.setIn(['data', 'timer', 'tick'], Immutable.fromJS(action.project))
      })
    case TIMER_STOP:
      return state.withMutations(map => {
        map.setIn(['data', 'timer', 'stop'], Immutable.fromJS(action.project))
      })
    default:
      return state
  }
}

export default project
