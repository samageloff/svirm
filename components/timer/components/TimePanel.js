import React, { Component } from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { bool, number } from 'prop-types'
import { timerStatus, currentTick, defaultTick } from 'timer/selectors'
import StyledDiv from 'common/styled/StyledDiv'
import variables from 'common/styles/variables.scss'

export class TimePanel extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    currentTick: number,
    defaultTick: number,
    timerStatus: bool
  }

  shouldComponentUpdate = nextProps => {
    if (nextProps.currentTick !== this.props.currentTick) return true
    if (nextProps.defaultTick !== this.props.defaultTick) return true
    if (nextProps.timerStatus !== this.props.timerStatus) return true

    return false
  }

  calculatePercentage = () => (this.props.currentTick / this.props.defaultTick) * 100

  styles = () => Immutable.fromJS({
    background: variables.color_wrapper,
    position: 'absolute',
    bottom: 0,
    height: this.props.timerStatus ? `${this.calculatePercentage()}%` : '0',
    width: '100%',
    opacity: 1,
    transition: `all .35s ${variables.transition_timing_function}`,
    zIndex: 1
  })

  render = () => (
    <StyledDiv css={this.styles()} />
  )
}

const mapStateToProps = state => {
  return {
    currentTick: currentTick(state),
    defaultTick: defaultTick(state),
    timerStatus: timerStatus(state)
  }
}

export default connect(mapStateToProps)(TimePanel)
