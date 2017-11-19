import config from './config'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/root'

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer, 
    initialState, 
    compose(
      applyMiddleware(
        thunkMiddleware
      ),
      config.NODE_ENV === 'development' && window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    // TODO: figure out why this isn't removing the console log notice
    module.hot.accept('./reducers/root', () => {
      const nextRootReducer = require('./reducers/root')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
