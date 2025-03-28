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

const InstabilityComponent = MyLoadable({
  loader: () => import('src/components/instability/containers/Instability'),
  modules: ['src/components/instability/containers/Instability'],
  webpack: () => [require.resolveWeak('src/components/instability/containers/Instability')]
})

const SequencesComponent = MyLoadable({
  loader: () => import('src/components/sequences/containers/Sequences'),
  modules: ['src/components/sequences/containers/Sequences'],
  webpack: () => [require.resolveWeak('src/components/sequences/containers/Sequences')]
})

const components = {
  timer: TimerComponent,
  julio: JulioComponent,
  instability: InstabilityComponent,
  sequences: SequencesComponent
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
