import integrationReducer from '../../../../src/common/reducers/integration'

import {
  UPDATE_INTEGRATION,
  TOGGLE_ACTIVE_STATE,
} from '../../../../src/common/actions/integration'

describe('Reducer::Integration', () => {
  it('should return the default state', () => {
    const action = { type: 'unknown' }
    const newState = integrationReducer(undefined, action)

    expect(newState.get('active')).to.be.false
    expect(newState.get('data').toJS()).to.deep.equal({})
  })

  it('should return the UPDATE_INTEGRATION state ', () => {
    const integration = { id: 123, config: { test: '123' } }
    const action = { type: UPDATE_INTEGRATION, integration: integration }
    const newState = integrationReducer(undefined, action)

    expect(newState.get('data').toJS()).to.deep.equal(action.integration)
  })

  it('should return the TOGGLE_ACTIVE_STATE state', () => {
    const action = { type: TOGGLE_ACTIVE_STATE, active: true }
    const newState = integrationReducer(undefined, action)

    expect(newState.get('active')).to.equal(action.active)
  })
})