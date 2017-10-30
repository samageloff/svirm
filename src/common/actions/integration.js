export const UPDATE_INTEGRATION = 'UPDATE_INTEGRATION'
export const TOGGLE_ACTIVE_STATE = 'TOGGLE_ACTIVE_STATE'

const _updateIntegration = (integration) => {
  return {
    type: UPDATE_INTEGRATION,
    integration
  }
}

const _toggleActiveState = (active) => {
  return {
    type: TOGGLE_ACTIVE_STATE,
    active
  }
}

export const updateIntegration = (integration) => {
  return dispatch => {
    dispatch(_updateIntegration(integration))
  }
}

export const toggleActiveState = (active) => {
  return dispatch => {
    dispatch(_toggleActiveState(active))
  }
}
