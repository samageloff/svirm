import React, { Component } from 'react'
import StyledDiv from 'common/styled/StyledDiv'
import { projectStyle } from './style'
import MyLoadable from 'src/components/common/modules/MyLoadable'

const JulioComponent = MyLoadable({
  loader: () => import('src/components/julio-le-parc/containers/JulioLeParc'),
  modules: ['src/components/julio-le-parc/containers/JulioLeParc'],
  webpack: () => [require.resolveWeak('src/components/julio-le-parc/containers/JulioLeParc')]
})

const TimerComponent = MyLoadable({
  loader: () => import('src/components/timer/containers/Timer'),
  modules: ['src/components/timer/containers/Timer'],
  webpack: () => [require.resolveWeak('src/components/timer/containers/Timer')]
})

const components = {
  timer: TimerComponent,
  julio: JulioComponent  
}

export class Project extends Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    const { type } = this.props
    const ProjectType = components[type]

    return (
      <StyledDiv css={projectStyle(type)}>
        <ProjectType />
      </StyledDiv>
    )
  }
}


export default Project
