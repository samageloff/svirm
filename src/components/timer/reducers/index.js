import config from '../config'
import Immutable from 'immutable'

import {
  TICK,
  TIMER_RESET,
  TIMER_TOGGLE,
  INITIALIZED,
  SET_CURRENT_TICK
} from 'src/actions/timer'

export const defaultTimerState = Immutable.fromJS({
  data: {
    timer: {
      status: false,
      defaultTick: config.TIMER.START_TIME,
      currentTick: config.TIMER.START_TIME,
      initialized: false,
      slides: [10, 20, 30, 40, 50, 60]
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
    case SET_CURRENT_TICK:
      return state.withMutations(map => {
        const slideList = map.getIn(['data', 'timer', 'slides'])

        map.setIn(['data', 'timer', 'currentTick'], slideList.get(action.data))
        map.setIn(['data', 'timer', 'defaultTick'], slideList.get(action.data))
      })
    default:
      return state
  }
}

export default index
