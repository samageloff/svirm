// Core
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import RouterWrapper from './router'

if (process.env.NODE_ENV !== 'production') {
  console.log('We are in development mode.')
}

// Configure Store
const store = configureStore()

ReactDOM.render((
  <Provider store={store}>
    <RouterWrapper />
  </Provider>
), document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
