import couponReducer from 'welcome/reducers/coupon'

import {
  SET_COUPON_CODE,
} from 'welcome/actions/coupon'

describe('Reducer::Coupon', () => {
  it('should return the default state', () => {
    const action = { type: 'unknown' }
    const newState = couponReducer(undefined, action)

    expect(newState.get('code')).to.equal('')
  })

  it('should return the SET_COUPON_CODE state ', () => {
    const code = 'c0uP0nC0d3'
    const action = { type: SET_COUPON_CODE, code: code }
    const newState = couponReducer(undefined, action)

    expect(newState.get('code')).to.equal(action.code)
  })
})