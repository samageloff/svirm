import React from 'react'
import { Map } from 'immutable'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from 'src/shared/components/nav'
import Info from 'src/shared/components/info'
import Landing from 'src/components/landing/containers/Landing'
import Project from 'src/components/project/containers/Project'
import StyledDiv from 'common/styled/StyledDiv'
import styles from 'common/styles/base.scss'

const routerStyles = Map({
  display: 'flex',
  height: '100%'
})

const RouterWrapper = () => (
  <Router>
    <StyledDiv css={routerStyles}>
      {/* <Nav />
      <Info /> */}
      <Route exact path='/' render={(props) => <Landing type='landing' />} />
      <Route path='/project/timer' render={(props) => <Project type='timer' />} />
      <Route path='/project/julio-le-parc' render={(props) => <Project type='julio' />} />
    </StyledDiv>
  </Router>
)

export default RouterWrapper