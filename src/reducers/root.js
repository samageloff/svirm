import { combineReducers } from 'redux'
import landing from 'src/components/landing/reducers'
import timer from 'src/components/timer/reducers'

const rootReducer = combineReducers({
  landing,
  timer
})

export default rootReducer
