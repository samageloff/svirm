import Immutable from 'immutable'

import {
  UPDATE_PROJECT,
  START_TIMER,
  TICK,
  STOP_TIMER,
  RESET_TIMER
} from '../actions/project'

const defaultProjectState = Immutable.fromJS({
  data: {
    timer: {
      start: false,
      stop: true,
      defaultTick: 5,
      currentTick: 5
    }
  }
})

const project = (state = defaultProjectState, action) => {
  switch (action.type) {
    case UPDATE_PROJECT:
      return state.withMutations(map => {
        map.set('data', Immutable.fromJS(action.project))
      })
    case START_TIMER:
      return state.withMutations(map => {
        map.setIn(['data', 'timer', 'start'], Immutable.fromJS(action.project))
      })
    case TICK:
      return state.withMutations(map => {
        const decrementTick = map.getIn(['data', 'timer', 'currentTick']) - 1

        map.setIn(['data', 'timer', 'currentTick'], decrementTick)
      })
    case STOP_TIMER:
      return state.withMutations(map => {
        map.setIn(['data', 'timer', 'stop'], Immutable.fromJS(action.project))
      })
    case RESET_TIMER:
      return state.withMutations(map => {
        map.setIn(['data', 'timer', 'currentTick'], map.getIn(['data', 'timer', 'defaultTick']))
      })
    default:
      return state
  }
}

export default project
