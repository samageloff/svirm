// Core
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import Timer from 'src/components/timer/containers/Timer'
import styles from 'common/styles/base.scss'

if (process.env.NODE_ENV !== 'production') {
  console.log('We are in development mode.')
}

// Configure Store
const store = configureStore()

ReactDOM.render((
  <Provider store={store}>
    <Timer />
  </Provider>
), document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
