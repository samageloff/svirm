import Immutable from 'immutable'
import { timerToggle, tick, timerReset, setCurrentTick } from 'src/actions/timer'

describe('Actions:Timer', () => {

  describe('timerReset', () => {
    const resetCallback = jest.fn()

    it('should call timerReset', () => {
      timerReset()(resetCallback)
      expect(resetCallback.mock.calls.length).toBe(2)
    })
  })

  describe('setCurrentTick', () => {
    const currentTickCallback = jest.fn()
    const mockTick = {'data': 2, 'type': 'SET_CURRENT_TICK'}

    it('should call setCurrentTick', () => {
      setCurrentTick(2)(currentTickCallback)
      expect(currentTickCallback.mock.calls.length).toBe(1)
      expect(currentTickCallback.mock.calls[0][0]).toEqual(mockTick)
    })
  })

  describe('tick', () => {
    it.skip('should call setCurrentTick', () => {
      tick()()
    })
  })
})
