export const project = state => state.project.get('data')

export const currentTick = state => state.project.getIn(['data', 'timer', 'currentTick'])

export const timerStatus = state => state.project.getIn(['data', 'timer', 'status'])