import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Landing from 'src/components/landing/containers/Landing'
import Timer from 'src/components/timer/containers/Timer'
import JulioLeParc from 'src/components/julio-le-parc/containers/JulioLeParc'
import styles from 'common/styles/base.scss'

const RouterWrapper = () => (
  <Router>
    <div className={styles['outer-wrapper']}>
      <div>
        <ul>
          <li>
            <Link to='/'>Landing</Link>
          </li>
          <li>
            <Link to='/timer'>Timer</Link>
          </li>
          <li>
            <Link to='/julio-le-parc'>Julio Le Parc</Link>
          </li>
        </ul>
      </div>

      <Route exact path='/' component={LandingWrapper} />
      <Route path='/timer' component={TimerWrapper} />
      <Route path='/julio-le-parc' component={JulioLeParc} />
    </div>
  </Router>
)

const LandingWrapper = () => (
  <Landing />
) 

const TimerWrapper = () => (
  <Timer />
)

const JulioLeParcWrapper = () => (
  <JulioLeParc />
)

export default RouterWrapper