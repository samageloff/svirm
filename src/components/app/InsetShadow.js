import React, { Component } from 'react'
import Immutable from 'immutable'
import { connect } from 'react-redux'
import { bool } from 'prop-types'
import { initialized } from 'src/selectors/timer'
import styles from 'src/styles/variables.scss'
import StyledDiv from 'src/components/common/styled/StyldDiv'

export class InsetShadow extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    initialized: bool
  }

  shouldComponentUpdate = nextProps => {
    if (nextProps.initialized !== this.props.initialized) return true

    return false
  }

  style = () => Immutable.fromJS({
    boxShadow: `inset 0 0px 60px 10px ${styles.color_viewport}`,
    bottom: 0,
    display: this.props.initialized ? 'none' : 'block',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: styles.zindex_insetShadow
  })

  render = () => (
    <StyledDiv css={this.style()} className='inset-shadow' />
  )
}

const mapStateToProps = state => {
  return {
    initialized: initialized(state)
  }
}

export default connect(mapStateToProps)(InsetShadow)
