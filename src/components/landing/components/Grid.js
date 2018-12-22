import React, { Component } from 'react'
import Immutable from 'immutable'
import { connect } from 'react-redux'
import { bool } from 'prop-types'
import { bindActionCreators } from 'redux'
import styles from 'common/styles/variables.scss'
import StyledDiv from 'common/styled/StyledDiv'

export class Grid extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
  }

  shouldComponentUpdate = nextProps => {
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
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    width: '100%'
  })

  render = () => (
      <StyledDiv css={this.wrapperStyle()}>
        Grid
      </StyledDiv>
    )
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid)
