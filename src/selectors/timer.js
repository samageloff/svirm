export const timer = state => state.timer.get('data')

export const currentTick = state => state.timer.getIn(['data', 'timer', 'currentTick'])

export const defaultTick = state => state.timer.getIn(['data', 'timer', 'defaultTick'])

export const timerStatus = state => state.timer.getIn(['data', 'timer', 'status'])