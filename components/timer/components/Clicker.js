import React, { Component } from 'react'
import Immutable from 'immutable'
import { connect } from 'react-redux'
import { bool } from 'prop-types'
import { bindActionCreators } from 'redux'
import { timerToggle } from 'timer/actions'
import { initialized, timerStatus } from 'timer/selectors'
import styles from 'common/styles/variables.scss'
import StyledDiv from 'common/styled/StyledDiv'
import Burst from 'common/styles/transitions/burst.css'

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

  wrapperStyle = () => Immutable.fromJS({
    bottom: '40px',
    display: 'flex',
    height: '60px',
    position: 'absolute',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    zIndex: '5',
    button: {
      background: styles.color_wrapper,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      height: '60px',
      width: '60px'
    }
  })

  render = () => (
      <StyledDiv css={this.wrapperStyle()}>
        <Burst>
          <button onClick={this.props.actions.timerToggle}></button>
        </Burst>
      </StyledDiv>
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
