import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ModalContentContainer from './ModalContentContainer'
import IFrame from 'ambassador-common/utilities/iframe'
import { toggleActiveState } from 'common/actions/integration'

export class ModalContainer extends Component {

  constructor(props) {
    super(props)
  }

  static propTypes = {
    isOpen: PropTypes.bool,
    showBranding: PropTypes.bool,
    actions: PropTypes.object
  }

  componentWillMount = () => {
    // Add message listener for show message
    IFrame.addMessageListener('close', () => {
      this.props.actions.toggleActiveState(false)

      // Wait for animation then send close message back to hide iframe
      // We use 210ms here because the fadeout animation is 200ms
      setTimeout(() => {
        IFrame.sendMessage('close')
      }, 210)
    })
  }

  getSourceUrl = () => {
    return document.location.hostname
  }

  getStyles = () => {
    let style = {
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
      opacity: 0,
      overflow: 'auto',
      top: 0,
      transition: '.2s opacity ease',
      width: '100%',
      willChange: 'opacity',
      zIndex: 5
    }

    if (this.props.isOpen) {
      style.opacity = 1
    }

    return style
  }

  render = () => {
    const sourceUrl = this.getSourceUrl()
    return (
      <div className='modal-container' style={this.getStyles()}>
        <ModalContentContainer>
          {this.props.children}
          {
            this.props.showBranding
            ? <span className='brand-stamp'>Powered by <a href={`https://www.getambassador.com/?utm_source=${sourceUrl}&utm_campaign=welcome_message&utm_medium=powered_by_link`} target='_new'>Ambassador</a></span>
            : null
          }
        </ModalContentContainer>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { integration } = state

  return {
    isOpen: integration.get('active'),
    showBranding: integration.getIn(['data', 'show_branding'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      toggleActiveState
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)
