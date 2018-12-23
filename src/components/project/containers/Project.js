import React from 'react'
import Loadable from 'react-loadable'

const JulioComponent = Loadable({
  loader: () => import('src/components/julio-le-parc/containers/JulioLeParc'),
  loading: 'Loading',
})

const TimerComponent = Loadable({
  loader: () => import('src/components/timer/containers/Timer'),
  loading: 'Loading',
})

const Project = props => (
  <div>
    <JulioComponent />
  </div>
)

export default Project
