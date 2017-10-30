import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateIntegration, toggleActiveState } from 'common/actions/integration'
import ModalContainer from './ModalContainer'
import IFrame from 'ambassador-common/utilities/iframe'

export class IntegrationContainer extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    actions: PropTypes.object
  }

  state = {
    initialized: false
  }

  componentWillMount = () => {

    // Add message listener for init
    IFrame.addMessageListener('init', (message) => {
      this.props.actions.updateIntegration(message.integration)
      this.setState({ initialized: true })
    })

    // Add message listener for integration updates
    IFrame.addMessageListener('integration', (message) => {
      this.props.actions.updateIntegration(message.integration)
    })

    // Add message listener for show message
    IFrame.addMessageListener('show', () => {
      this.props.actions.toggleActiveState(true)
    })
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return this.state.initialized !== nextState.initialized
  }

  render = () => {
    return (
      <div>
        { this.state.initialized &&
          <ModalContainer>
            <div style={{'height': '100%'}}>{this.props.children}</div>
          </ModalContainer>
        }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      updateIntegration,
      toggleActiveState
    }, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(IntegrationContainer)
