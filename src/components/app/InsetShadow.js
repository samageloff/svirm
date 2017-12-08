import React, { Component } from 'react'
import Immutable from 'immutable'
import { connect } from 'react-redux'
import { bool } from 'prop-types'
import { initialized } from 'src/selectors/timer'
import styles from 'src/styles/inset-shadow.scss'
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
    display: this.props.initialized ? 'none' : 'block'
  })

  render = () => (
    <StyledDiv css={this.style()} className={styles['inset-shadow']} />
  )
}

const mapStateToProps = state => {
  return {
    initialized: initialized(state)
  }
}

export default connect(mapStateToProps)(InsetShadow)
