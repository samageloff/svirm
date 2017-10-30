import Immutable from 'immutable'

import {
  SET_COUPON_CODE,
} from '../actions/coupon'

const defaultState = Immutable.fromJS({
  code: '',
})

const coupon = (state = defaultState, action) => {
  switch (action.type) {
    case SET_COUPON_CODE:
      return state.withMutations(map => {
        map.set('code', action.code)
      })
    default:
      return state
  }
}

export default coupon
