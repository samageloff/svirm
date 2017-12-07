import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bool } from 'prop-types'
import { bindActionCreators } from 'redux'
import { timerToggle } from 'src/actions/timer'
import { timerStatus } from 'src/selectors/timer'
import TimePanel from 'src/components/app/TimePanel'
import Burst from 'src/styles/transitions/burst.css'
import style from 'src/styles/clicker.scss'

export class Clicker extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    timerStatus: bool
  }

  shouldComponentUpdate = nextProps => {
    if (nextProps.timerStatus !== this.props.timerStatus) return true
    
    return false
  }

  defaultStyle = () => {
    return {
      display: 'flex',
      justifyContent: 'center'
    }
  }

  render = () => (
      <div className={style['clicker']}>
        <Burst in={this.props.timerStatus} duration={350} defaultStyle={this.defaultStyle()}>
          <button onClick={this.props.actions.timerToggle}></button>
        </Burst>
        <TimePanel />
      </div>
    )
}

const mapStateToProps = state => {
  return {
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
