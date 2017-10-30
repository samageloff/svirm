// Core
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import IntegrationApp from 'common/components/IntegrationApp'
import WelcomeContainer from 'welcome/components/WelcomeContainer'
import style from 'welcome/styles/base'

// Configure Store
const store = configureStore()

ReactDOM.render((
  <Provider store={store}>
    <IntegrationApp>
       <WelcomeContainer />
    </IntegrationApp>
  </Provider>
), document.getElementById('module'))
