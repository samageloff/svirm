import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Landing from 'src/components/landing/containers/Landing'
import Timer from 'src/components/landing/containers/Timer'
import styles from 'common/styles/base.scss'

const RouterWrapper = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/'>Landing</Link>
        </li>
        <li>
          <Link to='/timer'>Timer</Link>
        </li>
      </ul>

      <hr />

      <Route exact path='/' component={LandingWrapper} />
      <Route path='/timer' component={TimerWrapper} />
    </div>
  </Router>
)

const LandingWrapper = () => (
  <Landing />
)

const TimerWrapper = () => (
  <Timer />
)

const Topics = ({ match }) => (
  <Route
    exact
    path={match.url}
    render={() => <h3>Please select a topic.</h3>}
  />
)

export default RouterWrapper