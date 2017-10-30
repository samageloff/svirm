import { updateIntegration, toggleActiveState } from '../../../../src/common/actions/integration'

describe('Actions::Integration', () => {
  let dispatch

  beforeEach(() => {
    dispatch = sinon.spy()
  })

  describe('updateIntegration', () => {
    it('should dispatch the UPDATE_INTEGRATION action', () => {
      const integration = { id: 123, config: { test: '123' } }
      const expectedResponse = {
        type: 'UPDATE_INTEGRATION',
        integration
      }
      updateIntegration(integration)(dispatch)
      expect(dispatch.calledOnce).to.be.true
      expect(dispatch.calledWith(expectedResponse)).to.be.true
    })
  })

  describe('toggleActiveState', () => {
    it('should dispatch the TOGGLE_ACTIVE_STATE action', () => {
      const active = true
      const expectedResponse = {
        type: 'TOGGLE_ACTIVE_STATE',
        active
      }
      toggleActiveState(active)(dispatch)
      expect(dispatch.calledOnce).to.be.true
      expect(dispatch.calledWith(expectedResponse)).to.be.true
    })
  })
})