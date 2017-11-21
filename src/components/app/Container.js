import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Immutable, { Map } from 'immutable'
import { number } from 'prop-types'
import { map } from 'react-immutable-proptypes'
import { project, currentTick } from 'src/selectors/project'
import { startTimer, stopTimer, resetTimer } from 'src/actions/project'
import { StyldH1, StyldH2 } from 'src/components/common/styled'
import Input from 'react-ions/lib/input'
import Button from 'react-ions/lib/button'
import style from 'src/styles/base.scss'

export class Container extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    currentTick: number
  }

  shouldComponentUpdate = (nextProps) => {
    if (nextProps.currentTick !== this.props.currentTick) return true

    return false
  }

  render = () => {
    return (
      <div>
        <StyldH1 key='h1'>This is Boilerplate. 🔥</StyldH1>
        <StyldH2 key='h2'>Application state</StyldH2>
        <Input key='input' value={this.props.currentTick} />
        <Button key='start' onClick={this.props.actions.startTimer}>Start</Button>
        <Button key='stop' onClick={this.props.actions.stopTimer}>Stop</Button>
        <Button key='reset' onClick={this.props.actions.resetTimer}>Reset</Button>
        <div key='code'>
          <code>{JSON.stringify(this.props.project.toJS())}</code>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    project: project(state),
    currentTick: currentTick(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({
      startTimer,
      stopTimer,
      resetTimer
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
