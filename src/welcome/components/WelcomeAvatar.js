import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Immutable from 'immutable'
import { connect } from 'react-redux'
import InlineStylePrefixer from 'common/helpers/inline-style-prefixer'
import camelcaseKeys from 'camelcase-keys'

export class WelcomeAvatar extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    avatar: PropTypes.string.isRequired,
    styles: ImmutablePropTypes.map.isRequired
  }

  getStyles = () => {
    let styles = {
      borderStyle: 'solid',
      boxSizing: 'border-box',
      width: '100%'
    }

    const customStyles = camelcaseKeys(this.props.styles.toJS())
    Object.assign(styles, customStyles)

    return InlineStylePrefixer(styles)
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (!Immutable.is(nextProps.styles, this.props.styles)) return true
    if (this.props.avatar != nextProps.avatar) return true

    return false
  }

  render = () => {
    return (
      this.props.avatar ?
        <div className='welcome-avatar' style={{ maxHeight: '80px', maxWidth: '80px' }} >
          <img src={this.props.avatar} style={this.getStyles()} />
        </div>
      : null
    )
  }
}

const mapStateToProps = (state, props) => {
  const { affiliate, integration } = state

  return {
    avatar: affiliate.getIn(['data', 'avatar_url']),
    styles: integration.getIn(['data', 'config', 'customizations', 'avatar'])
  }
}

export default connect(mapStateToProps, null)(WelcomeAvatar)
