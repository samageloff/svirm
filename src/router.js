import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Landing from 'src/components/landing/containers/Landing'
import Project from 'src/components/project/containers/Project'
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
            <Link to='/project/timer'>Timer</Link>
          </li>
          <li>
            <Link to='/project/julio-le-parc'>Julio Le Parc</Link>
          </li>
        </ul>
      </div>

      <Route exact path='/' component={Landing} />
      <Route path='/project/:slug' component={Project} />
    </div>
  </Router>
)

export default RouterWrapper