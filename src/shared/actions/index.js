export const NAV_TOGGLE = 'NAV_TOGGLE'

export const _navToggle = () => {
  return {
    type: NAV_TOGGLE
  }
}

export const navToggle = () => dispatch => {
  dispatch(_navToggle())
}
