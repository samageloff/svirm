import { combineReducers } from 'redux'
import shared from 'src/shared/reducers'
import landing from 'src/components/landing/reducers'
import timer from 'src/components/timer/reducers'

const rootReducer = combineReducers({
  landing,
  timer,
  shared
})

export default rootReducer
