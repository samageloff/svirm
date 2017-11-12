import config from './config'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/root'

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware
      ),
      config.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}
