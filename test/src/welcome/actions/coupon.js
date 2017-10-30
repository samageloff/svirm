import { setCouponCode } from 'welcome/actions/coupon'

describe('Actions::Coupon', () => {
  let dispatch

  beforeEach(() => {
    dispatch = sinon.spy()
  })

  describe('setCouponCode', () => {
    it('should dispatch the SET_COUPON_CODE action', () => {
      const code = 'c0uP0nC0d3'
      const expectedResponse = {
        type: 'SET_COUPON_CODE',
        code
      }
      setCouponCode(code)(dispatch)
      expect(dispatch.calledOnce).to.be.true
      expect(dispatch.calledWith(expectedResponse)).to.be.true
    })
  })
})