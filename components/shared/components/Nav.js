import React, { Component } from 'react'
import { Map } from 'immutable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { bool } from 'prop-types'
import StyledDiv from 'common/styled/StyledDiv'
import { navIsToggled } from 'shared/selectors'
import { navToggle } from 'shared/actions'

const navStyles = Map({
  color: 'white',
  cursor: 'pointer',
  position: 'absolute',
  lineHeight: '1em',
  top: '1em',
  padding: '1em',
  left: '0',
  zIndex: 10,
  background: 'black'
})

export class Nav extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    toggled: bool
  }

  shouldComponentUpdate = nextProps => {
    if (nextProps.toggled !== this.props.toggled) return true

    return false
  }

  render = () => (
    <StyledDiv css={navStyles} onClick={this.props.actions.navToggle}>{
      this.props.toggled ? '-' : '+'
    }</StyledDiv>
  )
}

const mapStateToProps = state => {
  return {
    toggled: navIsToggled(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({
      navToggle
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
