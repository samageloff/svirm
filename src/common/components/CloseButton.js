import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Immutable from 'immutable'
import { toggleActiveState } from 'common/actions/integration'
import Icon from 'react-ions/lib/Icon'
import IFrame from 'ambassador-common/utilities/iframe'

export class CloseButton extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    styles: ImmutablePropTypes.map.isRequired,
    actions: PropTypes.object.isRequired
  }

  shouldComponentUpdate = (nextProps) => {
    if (!Immutable.is(this.props.styles, nextProps.styles)) return true

    return false
  }

  massageStyles = () => {
    let containerBorderWidth = this.props.styles.get('border-width')

    const styles = {
      alignItems: 'center',
      backgroundColor: '#f7f7f9',
      borderRadius: '50%',
      cursor: 'pointer',
      display: 'flex',
      height: '34px',
      justifyContent: 'center',
      position: 'absolute',
      right: `calc(15px + ${containerBorderWidth})`,
      top: `calc(15px + ${containerBorderWidth})`,
      width: '34px'
    }

    return styles
  }

  getStyles = () => {
    let styles = this.massageStyles()
    return styles
  }

  close = (e) => {
    e.preventDefault()
    this.props.actions.toggleActiveState(false)

    // Wait for animation then send close message back to hide iframe
    // We use 210ms here because the fadeout animation is 200ms
    setTimeout(() => {
      IFrame.sendMessage('close')
    }, 210)
  }

  render = () => {
    return (
      <div className='welcome-close' style={this.getStyles()} onClick={(e) => this.close(e)}>
        <Icon name='icon-delete-1-1' width='12' height='12' color='#233140' />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { integration } = state

  return {
    styles: integration.getIn(['data', 'config', 'customizations', 'layout', 'modal', 'container'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      toggleActiveState
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CloseButton)
