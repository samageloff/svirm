import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Immutable, { Map } from 'immutable'
import { map } from 'react-immutable-proptypes'
import { project } from 'src/selectors/project'
import { startTimer, stopTimer } from 'src/actions/project'
import { StyldH1, StyldH2 } from 'src/components/common/styled'
import Input from 'react-ions/lib/input'
import Button from 'react-ions/lib/button'
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
    return (
      <div>
        <StyldH1 key='h1'>This is Boilerplate. 🔥</StyldH1>
        <StyldH2 key='h2'>Application state</StyldH2>
        <Input key='input' />
        <Button key='start' onClick={this.props.actions.startTimer}>Start</Button>
        <Button key='stop' onClick={this.props.actions.stopTimer}>Stop</Button>
        <div key='code'>
          <code>{JSON.stringify(this.props.project.toJS())}</code>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    project: project(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({
      startTimer,
      stopTimer
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
