import Immutable from 'immutable'

import {
  UPDATE_AFFILIATE,
} from '../actions/affiliate'

const defaultState = Immutable.fromJS({
  data: Immutable.fromJS({}),
})

const affiliate = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_AFFILIATE:
      return state.withMutations(map => {
        map.set('data', Immutable.fromJS(action.affiliate))
      })
    default:
      return state
  }
}

export default affiliate
