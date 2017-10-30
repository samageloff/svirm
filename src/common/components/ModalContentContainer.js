import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleActiveState } from 'common/actions/integration'
import enhanceWithClickOutside from 'react-click-outside'
import InlineStylePrefixer from 'common/helpers/inline-style-prefixer'
import FeatureDetectFlexbox from 'ambassador-common/utilities/feature-detect-flexbox'
import IFrame from 'ambassador-common/utilities/iframe'

export class ModalContentContainer extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    isOpen: PropTypes.bool
  }

  shouldComponentUpdate = (nextProps) => {
    return this.props.isOpen !== nextProps.isOpen
  }

  getStyles = () => {
    let style = {
      'position': 'relative',
      'transform': 'translateY(50px) scale(.9)',
      'transition': '250ms all ease',
      'width': '490px',
      'zIndex': '10'
    }

    if (!FeatureDetectFlexbox()) {
      style.margin = '80px auto 30px'
    }

    if (this.props.isOpen) {
      style.opacity = 1,
      style.transform = 'translateY(0) scale(1)'
    }

    return InlineStylePrefixer(style)
  }

  handleClickOutside() {
    this.props.actions.toggleActiveState(false)

    // Wait for animation then send close message back to hide iframe
    // We use 210ms here because the fadeout animation is 200ms
    setTimeout(() => {
      IFrame.sendMessage('close')
    }, 210)
  }

  render = () => {
    const style = InlineStylePrefixer(this.getStyles())

    return (
      <div className='modal-content-container' style={style}>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { integration } = state

  return {
    isOpen: integration.get('active')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      toggleActiveState
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(enhanceWithClickOutside(ModalContentContainer))
