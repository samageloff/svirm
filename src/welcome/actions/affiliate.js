export const UPDATE_AFFILIATE = 'UPDATE_AFFILIATE'

const _updateAffiliate = (affiliate) => {
  return {
    type: UPDATE_AFFILIATE,
    affiliate
  }
}

export const updateAffiliate = (affiliate) => {
  return dispatch => {
    dispatch(_updateAffiliate(affiliate))
  }
}
