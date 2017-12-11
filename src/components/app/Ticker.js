import React, { Component } from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { number } from 'prop-types'
import { currentTick } from 'src/selectors/timer'
import StyledDiv from 'src/components/common/styled/StyldDiv'
import Carousel from 'src/components/app/Carousel'
import variables from 'src/styles/variables.scss'

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

  styles = () => Immutable.fromJS({
    alignItems: 'center',
    color: variables.color_white,
    display: 'flex',
    fontSize: '1rem',
    flexDirection: 'column',
    position: 'relative',
    fontWeight: 'bold',
    justifyContent: 'center',
    width: '100%',
    zIndex: variables.zindex_ticker
  })

  render = () => (
    <StyledDiv css={this.styles()}>
      <Carousel />
    </StyledDiv>
  )
}

const mapStateToProps = state => {
  return {
    currentTick: currentTick(state)
  }
}

export default connect(mapStateToProps)(Ticker)
