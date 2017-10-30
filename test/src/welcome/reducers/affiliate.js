import affiliateReducer from 'welcome/reducers/affiliate'

import {
  UPDATE_AFFILIATE,
} from 'welcome/actions/affiliate'

describe('Reducer::Affiliate', () => {
  it('should return the default state', () => {
    const action = { type: 'unknown' }
    const newState = affiliateReducer(undefined, action)

    expect(newState.get('data').toJS()).to.deep.equal({})
  })

  it('should return the UPDATE_AFFILIATE state ', () => {
    const affiliate = { data: { id: 123, test: '123' }}
    const action = { type: UPDATE_AFFILIATE, affiliate: affiliate }
    const newState = affiliateReducer(undefined, action)

    expect(newState.get('data').toJS()).to.deep.equal(action.affiliate)
  })
})