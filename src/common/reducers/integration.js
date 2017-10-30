import Immutable from 'immutable'

import {
  UPDATE_INTEGRATION,
  TOGGLE_ACTIVE_STATE,
} from '../actions/integration'

const defaultIntegrationState = Immutable.fromJS({
  data: Immutable.fromJS({}),
  active: false,
})

const integration = (state = defaultIntegrationState, action) => {
  switch (action.type) {
    case UPDATE_INTEGRATION:
      return state.withMutations(map => {
        map.set('data', Immutable.fromJS(action.integration))
      })
    case TOGGLE_ACTIVE_STATE:
      return state.withMutations(map => {
        map.set('active', action.active)
      })
    default:
      return state
  }
}

export default integration
