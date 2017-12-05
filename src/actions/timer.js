export const TICK = 'TICK'
export const TIMER_RESET = 'TIMER_RESET'
export const TIMER_TOGGLE = 'TIMER_TOGGLE'

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

const _timerStart = () => (dispatch) => {
  clearInterval(timer)

  timer = setInterval(() => dispatch(tick()), 100)
}

const timerStop = () => {
  clearInterval(timer)
}

export const timerToggle = () => (dispatch, getState) => {
  const status = !getState().timer.getIn(['data', 'timer', 'status'])  

  dispatch(_timerToggle(status))

  status ? setTimeout(() => { dispatch(_timerStart())}, 150) : timerStop()
}

export const tick = () => (dispatch, getState) => {
  const currentTick = getState().timer.getIn(['data', 'timer', 'currentTick'])
  
  if (currentTick === 0) {
    timerStop()
    return dispatch(timerReset())
  }

  return dispatch(_tick())
}

export const timerReset = () => (dispatch) => {
  dispatch(_timerReset())
  dispatch(timerToggle())
}
