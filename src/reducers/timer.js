import config from '../config'
import Immutable from 'immutable'

import {
  TICK,
  TIMER_RESET,
  TIMER_TOGGLE,
  INITIALIZED
} from '../actions/timer'

const defaultTimerState = Immutable.fromJS({
  data: {
    timer: {
      status: false,
      defaultTick: config.START_TIME,
      currentTick: config.START_TIME,
      initialized: false
    }
  }
})

const timer = (state = defaultTimerState, action) => {
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
    case INITIALIZED:
      return state.withMutations(map => {
        map.setIn(['data', 'timer', 'initialized'], action.data)
      })
    default:
      return state
  }
}

export default timer
