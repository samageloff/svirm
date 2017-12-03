import Immutable from 'immutable'

import {
  TICK,
  TIMER_RESET,
  TIMER_TOGGLE
} from '../actions/project'

const defaultProjectState = Immutable.fromJS({
  data: {
    timer: {
      status: false,
      defaultTick: 100,
      currentTick: 100
    }
  }
})

const project = (state = defaultProjectState, action) => {
  switch (action.type) {
    case TICK:
      return state.withMutations(map => {
        const decrementTick = map.getIn(['data', 'timer', 'currentTick']) - 1

        map.setIn(['data', 'timer', 'currentTick'], decrementTick)
      })
    case TIMER_TOGGLE: 
      return state.withMutations(map => {
        map.setIn(['data', 'timer', 'status'], Immutable.fromJS(action.data))
      })
    case TIMER_RESET:
      return state.withMutations(map => {
        map.setIn(['data', 'timer', 'currentTick'], map.getIn(['data', 'timer', 'defaultTick']))
      })
    default:
      return state
  }
}

export default project
