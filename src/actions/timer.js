import config from '../config'

export const TICK = 'TICK'
export const TIMER_RESET = 'TIMER_RESET'
export const TIMER_TOGGLE = 'TIMER_TOGGLE'
export const INITIALIZED = 'INITIALIZED'
export const SET_CURRENT_TICK = 'SET_CURRENT_TICK'

let timer = null

export const _tick = () => {
  return {
    type: TICK
  }
}

const _timerToggle = data => {
  return {
    type: TIMER_TOGGLE,
    data
  }
}

const _timerReset = () => {
  return {
    type: TIMER_RESET
  }
}

const _initialized = data => {
  return {
    type: INITIALIZED,
    data
  }
}

const _setCurrentTick = data => {
  return {
    type: SET_CURRENT_TICK,
    data
  }
}

const _timerStart = () => dispatch => {
  clearInterval(timer)

  timer = setInterval(() => dispatch(tick()), config.TIMER.SPEED)
}

const timerStop = () => {
  clearInterval(timer)
}

export const timerToggle = () => (dispatch, getState) => {
  const status = !getState().timer.getIn(['data', 'timer', 'status'])

  dispatch(_initialized(status))

  status
    // this is a little bit gross but it works pretty well
    ? setTimeout(() => {
      // the delayed toggle, gives the animation time to reach
      // the top of the viewport, before starting to count down
      dispatch(_timerToggle(status))
      setTimeout(() => {
        // the nested delayed timerStart allows the clicked button
        // to disappear before the previously delayed animation starts
        dispatch(_timerStart())
      }, config.TIMER.DURATION)
    }, config.TIMER.DURATION)
    : setTimeout(() => {
      timerStop()
      dispatch(_timerToggle(status))
    })
}

export const tick = () => (dispatch, getState) => {
  const currentTick = getState().timer.getIn(['data', 'timer', 'currentTick'])

  if (currentTick === 0) {
    timerStop()
    return dispatch(timerReset())
  }

  return dispatch(_tick())
}

export const timerReset = () => dispatch => {
  dispatch(_timerReset())
  dispatch(timerToggle())
}

export const setCurrentTick = tick => dispatch => {
  dispatch(_setCurrentTick(tick))
}