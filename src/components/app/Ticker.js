import React, { Component } from 'react'
import { connect } from 'react-redux'
import { number } from 'prop-types'
import { currentTick } from 'src/selectors/project'
import style from 'src/styles/ticker.scss'

export class Ticker extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    currentTick: number
  }

  shouldComponentUpdate = nextProps => {
    if (nextProps.currentTick !== this.props.currentTick) return true

    return false
  }

  render = () => (
    <div className={style['ticker']}>{this.props.currentTick}</div>
  )
}

const mapStateToProps = state => {
  return {
    currentTick: currentTick(state)
  }
}

export default connect(mapStateToProps)(Ticker)
