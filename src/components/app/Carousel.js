import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Immutable from 'immutable'
import { Swiper } from 'swiper/dist/js/swiper.esm.js'
import { bool, number } from 'prop-types'
import StyledDiv from 'src/components/common/styled/StyldDiv'
import { setCurrentTick } from 'src/actions/timer'
import { currentTick, initialized, slides } from 'src/selectors/timer'
import styles from 'src/styles/carousel.scss'

export class Carousel extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    currentTick: number,
    initialized: bool
  }

  shouldComponentUpdate = nextProps => {
    if (nextProps.currentTick !== this.props.currentTick) return true
    if (nextProps.initialized !== this.props.initialized) return true
    
    return false
  }

  componentDidMount = () => {
    const carousel = new Swiper('.swiper-container', {
      slidesPerView: 3,
      centeredSlides: true,
      initialSlide: 2
    })

    carousel.on('slideChange', () => this.props.actions.setCurrentTick(carousel.realIndex))
  }

  getSlides = () => {
    return this.props.slides.map((slide, index) => {
      return <div key={index} className='swiper-slide'>{slide}</div>
    })
  }

  currentTickStyles = () => Immutable.fromJS({
    display: this.props.initialized ? 'block' : 'none',
    fontSize: '7rem',
    position: 'absolute'
  })

  swiperContainerStyles = () => Immutable.fromJS({
    opacity: this.props.initialized ? '0' : '1',
    transition: 'opacity .35s ease'
  })

  render = () => [
    <StyledDiv key={1} css={this.currentTickStyles()}>{this.props.currentTick}</StyledDiv>,
    <StyledDiv key={2} css={this.swiperContainerStyles()} className='swiper-container'>
      <div className='swiper-wrapper'>
        {this.getSlides()}
      </div>
    </StyledDiv>
  ]
}

const mapStateToProps = state => {
  return {
    currentTick: currentTick(state),
    initialized: initialized(state),
    slides: slides(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({
      setCurrentTick
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)
