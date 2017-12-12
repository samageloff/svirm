import Immutable from 'immutable'
import timer from 'src/reducers/timer'
import { defaultTimerState } from 'src/reducers/timer'

import {
  TICK,
  TIMER_RESET,
  TIMER_TOGGLE,
  INITIALIZED,
  SET_CURRENT_TICK
} from 'src/actions/timer'

describe('Reducer::Timer', () => {
  it('should return the default timer state', () => {
    const action = { type: 'unknown' }
    const newState = timer(undefined, action)

    expect(Immutable.is(newState, defaultTimerState)).toBe(true)
  })

  it('should return the current TICK state ', () => {
    const action = { type: TICK }
    const newState = timer(defaultTimerState, action)

    expect(newState.getIn(['data', 'timer', 'currentTick'])).toBe(29)
  })

  it('should return the current TIMER_RESET state ', () => {
    const action = { type: TIMER_RESET }
    const newState = timer(defaultTimerState, action)

    expect(newState.getIn(['data', 'timer', 'currentTick'])).toBe(30)
  })

  it('should return the current TIMER_TOGGLE state ', () => {
    const action = { type: TIMER_TOGGLE, data: true }
    const newState = timer(defaultTimerState, action)

    expect(newState.getIn(['data', 'timer', 'status'])).toBe(true)
  })

  it('should return the current INITIALIZED state ', () => {
    const action = { type: INITIALIZED, data: true }
    const newState = timer(defaultTimerState, action)

    expect(newState.getIn(['data', 'timer', 'initialized'])).toBe(true)
  })

  it('should return the current SET_CURRENT_TICK state ', () => {
    const action = { type: SET_CURRENT_TICK, data: 3 }
    const newState = timer(defaultTimerState, action)

    expect(newState.getIn(['data', 'timer', 'currentTick'])).toBe(40)
    expect(newState.getIn(['data', 'timer', 'defaultTick'])).toBe(40)
  })
})
