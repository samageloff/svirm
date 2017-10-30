import { updateAffiliate } from 'welcome/actions/affiliate'

describe('Actions::Affiliate', () => {
  let dispatch

  beforeEach(() => {
    dispatch = sinon.spy()
  })

  describe('updateAffiliate', () => {
    it('should dispatch the UPDATE_AFFILIATE action', () => {
      const affiliate = { data: { id: 123, test: '123' }}
      const expectedResponse = {
        type: 'UPDATE_AFFILIATE',
        affiliate
      }
      updateAffiliate(affiliate)(dispatch)
      expect(dispatch.calledOnce).to.be.true
      expect(dispatch.calledWith(expectedResponse)).to.be.true
    })
  })
})