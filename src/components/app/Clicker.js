import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bool } from 'prop-types'
import { bindActionCreators } from 'redux'
import { timerToggle } from 'src/actions/timer'
import { initialized, timerStatus } from 'src/selectors/timer'
import Burst from 'src/styles/transitions/burst.css'
import style from 'src/styles/clicker.scss'

export class Clicker extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    initialized: bool,
    timerStatus: bool
  }

  shouldComponentUpdate = nextProps => {
    if (nextProps.initialized !== this.props.initialized) return true
    if (nextProps.timerStatus !== this.props.timerStatus) return true

    return false
  }

  defaultStyle = () => {
    return {
      display: 'flex',
      justifyContent: 'center',
      transform: 'scale(1)'
    }
  }

  render = () => (
      <div className={style['clicker']}>
        <Burst in={this.props.initialized} duration={350} defaultStyle={this.defaultStyle()}>
          <button onClick={this.props.actions.timerToggle}></button>
        </Burst>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    initialized: initialized(state),
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
