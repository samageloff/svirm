import React, { Component } from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { bindActionCreators } from 'redux'
import { bool, number } from 'prop-types'
import { currentTick, timerStatus } from 'src/selectors/project'
import { timerToggle } from 'src/actions/project'
import StyledDiv from 'src/components/common/styled/StyldDiv'
import style from 'src/styles/clicker.scss'

export class Clicker extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    currentTick: number,
    timerStatus: bool
  }

  shouldComponentUpdate = nextProps => {
    if (nextProps.currentTick !== this.props.currentTick) return true
    if (nextProps.timerStatus !== this.props.timerStatus) return true

    return false
  }

  styles = () => Immutable.fromJS({
    background: 'rgb(255, 110, 110)',
    position: 'absolute',
    bottom: '0',
    height: this.props.timerStatus ? `${this.props.currentTick}%` : '50px',
    width: this.props.timerStatus ? '100%' : '50px',
    opacity: this.props.timerStatus ? 1 : 0,
    transition: 'all .15s ease-out',
    zIndex: 1
  })

  render = () => (
      <div className={style['clicker']}>
        <button onClick={this.props.actions.timerToggle}></button>
        <StyledDiv css={this.styles()} />
      </div>
    )
}

const mapStateToProps = state => {
  return {
    currentTick: currentTick(state),
    timerStatus: timerStatus(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({
      timerToggle
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Clicker)
