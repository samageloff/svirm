import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { setCurrentTick, timerReset } from 'timer/actions'
import { defaultTimerState } from 'timer/reducers'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Actions:Timer', () => {
  describe('setCurrentTick', () => {
    const store = mockStore(defaultTimerState)

    store.dispatch(setCurrentTick())

    const actions = store.getActions()
    const expectedPayload = {
      type: 'SET_CURRENT_TICK',
      'data': undefined
    }

    it('should dispatch an action', () => {
      expect(actions).toEqual([expectedPayload])
    })
  })

  describe('timerReset', () => {
    const store = mockStore(defaultTimerState)

    store.dispatch(timerReset())

    const actions = store.getActions()

    const expectedPayload = {
      type: 'TIMER_RESET'
    }

    it('should dispatch an action', () => {
      expect(actions).toEqual([expectedPayload])
    })
  })

})
