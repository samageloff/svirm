import { combineReducers } from 'redux'
import integration from 'common/reducers/integration'
import affiliate from './affiliate'
import coupon from './coupon'

const rootReducer = combineReducers({
  integration,
  affiliate,
  coupon
})

export default rootReducer
