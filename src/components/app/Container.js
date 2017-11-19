import React, { Component } from 'react'
import { connect } from 'react-redux'
import Immutable, { Map } from 'immutable'
import { map } from 'react-immutable-proptypes'
import { project } from 'src/selectors/project'
import { StyldH1, StyldH2 } from 'src/components/common/styled'
import Input from 'react-ions/lib/input'
import style from 'src/styles/base.scss'

export class Container extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    project: map
  }

  shouldComponentUpdate = () => {
    return false
  }

  render = () => {
    return [
      <StyldH1 key='h1'>This is Boilerplate. 🔥</StyldH1>,
      <StyldH2 key='h2'>Application state</StyldH2>,
      <Input key='input' />,
      <code key='code'>{JSON.stringify(this.props.project.toJS())}</code>
    ]
  }
}

const mapStateToProps = state => {
  return {
    project: project(state)
  }
}

export default connect(mapStateToProps)(Container)
