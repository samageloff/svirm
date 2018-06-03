import config from 'src/config'
import Immutable from 'immutable'

export const defaultTimerState = Immutable.fromJS({
  data: {
    landing: {
      initialized: true
    }
  }
})

const landing = (state = defaultTimerState, action) => {
  switch (action.type) {
    case '@@redux/INIT':
      return state.withMutations(map => {
        map.setIn(['data', 'landing', 'initialized'], action.data)
      })
    default:
      return state
  }
}

export default landing
