export const SET_COUPON_CODE = 'SET_COUPON_CODE'

const _setCouponCode = (code) => {
  return {
    type: SET_COUPON_CODE,
    code
  }
}

export const setCouponCode = (code) => {
  return dispatch => {
    dispatch(_setCouponCode(code))
  }
}
