// Core
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import AppContainer from 'common/components/AppContainer'

// Configure Store
const store = configureStore()

ReactDOM.render((
  <Provider store={store}>
    <AppContainer />
  </Provider>
), document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}