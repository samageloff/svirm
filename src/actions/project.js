import { log } from "util";

export const UPDATE_PROJECT = 'UPDATE_PROJECT'

const _updateProject = (project) => {
  return {
    type: UPDATE_PROJECT,
    project
  }
}

export const updateProject = (project) => {
  return dispatch => {
    dispatch(_updateProject(project))
  }
}

export const START_TIMER = 'START_TIMER'
export const TICK = 'TICK'
export const STOP_TIMER = 'STOP_TIMER'
export const RESET_TIMER = 'RESET_TIMER'

let timer = null

const _startTimer = data => {
  return {
    type: START_TIMER,
    data
  }
}

export const _tick = () => {
  return {
    type: TICK
  }
}

const _stopTimer = data => {
  return {
    type: STOP_TIMER,
    data
  }
}

const _timerReset = () => {
  return {
    type: RESET_TIMER
  }
}

export const startTimer = () => (dispatch, getState) => {
  clearInterval(timer)

  timer = setInterval(() => dispatch(tick()), 1000)

  const status = !getState().project.getIn(['data', 'timer', 'start'])

  dispatch(_startTimer(status))
}

export const tick = () => (dispatch, getState) => {
  const currentTick = getState().project.getIn(['data', 'timer', 'currentTick'])
  
  if (currentTick === 0) {
    return dispatch(stopTimer())
  }

  return dispatch(_tick())  
}

export const stopTimer = () => (dispatch, getState) => {
  clearInterval(timer)

  const status = !getState().project.getIn(['data', 'timer', 'stop'])  

  dispatch(_stopTimer(status))
}

export const resetTimer = () => (dispatch) => {
  dispatch(stopTimer())
  dispatch(_timerReset())
}
