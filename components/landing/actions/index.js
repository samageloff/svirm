import config from 'src/config'

const _initialized = data => {
  return {
    type: INITIALIZED,
    data
  }
}

export const initialized = () => dispatch => {
  dispatch(_initialized(true))
}
