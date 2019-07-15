import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/root'
// import rootSaga from './sagas/root'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer, 
    initialState, 
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware
      )
    )
  )
  
  // sagaMiddleware.run(rootSaga)

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
