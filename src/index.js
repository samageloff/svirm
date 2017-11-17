// Core
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import Container from 'src/components/app/Container'

// Configure Store
const store = configureStore()

ReactDOM.render((
  <Provider store={store}>
    <Container />
  </Provider>
), document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}