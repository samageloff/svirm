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

export const TIMER_START = 'TIMER_START'
export const TIMER_TICK = 'TIMER_TICK'
export const TIMER_STOP = 'TIMER_STOP'

let timer = null

const _timerStart = () => {
  console.log('start')
  return {
    type: TIMER_START
  }
}

export const _tick = () => {
  console.log('tick')
  return {
    type: TIMER_TICK
  }
}

const _timerStop = () => {
  console.log('stop')
  return {
    type: TIMER_STOP
  }
}

export const startTimer = () => (dispatch) => {
  clearInterval(timer)

  timer = setInterval(() => dispatch(_tick()), 1000)

  dispatch(_timerStart())
  dispatch(_tick())
}

export const stopTimer = () => (dispatch) => {
  clearInterval(timer)
  dispatch(_timerStop())  
}
