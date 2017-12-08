import React, { Component } from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { Swiper } from 'swiper/dist/js/swiper.esm.js'
import { number } from 'prop-types'
import { currentTick } from 'src/selectors/timer'
import StyledDiv from 'src/components/common/styled/StyldDiv'
import InsetShadow from 'src/components/app/InsetShadow'
import styles from 'src/styles/swiper.scss'

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

  componentDidMount = () => {
    new Swiper('.swiper-container', {
      slidesPerView: 3,
      centeredSlides: true
    })
  }

  styles = () => Immutable.fromJS({
    alignItems: 'center',
    color: 'rgb(255, 255, 255)',
    display: 'flex',
    fontSize: '1rem',
    flexDirection: 'column',
    position: 'relative',
    fontWeight: 'bold',
    justifyContent: 'center',
    width: '100%',
    zIndex: '3'
  })

  render = () => (
    <StyledDiv css={this.styles()}>
      <div className='swiper-container'>
        <div className='swiper-wrapper'>
          <div className='swiper-slide'>30</div>
          <div className='swiper-slide'>{this.props.currentTick}</div>
          <div className='swiper-slide'>50</div>
        </div>
      </div>
    </StyledDiv>
  )
}

const mapStateToProps = state => {
  return {
    currentTick: currentTick(state)
  }
}

export default connect(mapStateToProps)(Ticker)
