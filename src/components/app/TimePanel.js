import React, { Component } from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { bool, number } from 'prop-types'
import { timerStatus, currentTick, defaultTick } from 'src/selectors/timer'
import StyledDiv from 'src/components/common/styled/StyldDiv'

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
    background: 'blue',
    position: 'absolute',
    bottom: 0,
    height: this.props.timerStatus ? `${this.calculatePercentage()}%` : '0',
    width: '100%',
    opacity: 1,
    transition: 'all .35s cubic-bezier(0.165, 0.840, 0.440, 1.000)',
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
