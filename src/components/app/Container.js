import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Immutable, { Map } from 'immutable'
import { bool, number } from 'prop-types'
import { map } from 'react-immutable-proptypes'
import { currentTick, timerStatus } from 'src/selectors/project'
import { timerToggle } from 'src/actions/project'
import { StyldH1, StyldH2 } from 'src/components/common/styled'
import Input from 'react-ions/lib/input'
import style from 'src/styles/base.scss'

export class Container extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    currentTick: number,
    timerStatus: bool
  }

  shouldComponentUpdate = (nextProps) => {
    if (nextProps.currentTick !== this.props.currentTick) return true
    if (nextProps.timerStatus !== this.props.timerStatus) return true
    
    return false
  }

  render = () => {
    return (
      <div className={style['wrapper']}>
        <div className={style['viewport']}>
          <div className={style['ticker']}>{this.props.currentTick}</div>
          <div className={style['clicker']}><button onClick={this.props.actions.timerToggle}></button></div>
        </div>
      </div>
    )
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Container)
