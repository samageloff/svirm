import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Immutable, { Map } from 'immutable'
import InlineStylePrefixer from 'common/helpers/inline-style-prefixer'
import camelcaseKeys from 'camelcase-keys'
import Clipboard from 'clipboard'
import Icon from 'react-ions/lib/Icon'

export class WelcomeCoupon extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    settings: ImmutablePropTypes.map.isRequired,
    couponCode: PropTypes.string.isRequired
  }

  state = {
    copied: false,
    copyTrigger: '#welcome-coupon--value'
  }

  componentDidMount = () => {
    this.activateCopyToClipboard()
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (!Immutable.is(this.props.settings, nextProps.settings)) return true
    if (!Immutable.is(this.props.couponCode, nextProps.couponCode)) return true
    if (this.state.copied !== nextState.copied) return true

    return false
  }

  componentWillUnmount = () => {
    this._clipboard.destroy()
  }

  massageStyles = () => {
    let configBorderRadius = this.props.settings.getIn(['container', 'border-radius'])
    let buttonBorderColor = this.props.settings.getIn(['button', 'background-color'])
    let codeBorderColor = this.props.settings.getIn(['container', 'border-color'])
    let codeBorderWidth = this.props.settings.getIn(['container', 'border-width'])

    let styles = {
      container: {
        'display': 'table',
        'height': '40px',
        'margin': '20px auto 30px',
        'minWidth': '100px',
        'overflow': 'hidden',
        'border': 'none'
      },
      code: {
        'borderColor': codeBorderColor,
        'borderStyle': 'solid',
        'borderWidth': codeBorderWidth,
        'display': 'table-cell',
        'height': '100%',
        'fontSize': '16px',
        'fontWeight': '200',
        'minWidth': '100px',
        'padding': '0 15px',
        'textAlign': 'center',
        'verticalAlign': 'middle'
      },
      button: {
        'borderColor': buttonBorderColor,
        'borderStyle': 'solid',
        'cursor': 'pointer',
        'display': 'table-cell',
        'height': '100%',
        'width': '40px',
        'textAlign': 'center',
        'verticalAlign': 'middle'
      }
    }

    // Because IE doesn't clip background color with overflow: hidden
    // or with the background-clip property - at least, not easily
    if (configBorderRadius) {
      styles.container.backgroundColor = this.props.settings.getIn(['container', 'border-color'])
      styles.code.borderTopLeftRadius = configBorderRadius
      styles.code.borderBottomLeftRadius = configBorderRadius
      styles.button.borderTopRightRadius = configBorderRadius
      styles.button.borderBottomRightRadius = configBorderRadius
    }

    return styles
  }

  activateCopyToClipboard = () => {
    const copyTriggers = document.querySelectorAll('.copy-trigger')
    this._clipboard = new Clipboard(copyTriggers)
    this._clipboard.on('success', () => {
      this.handleCopy()
    })
  }

  handleCopy = () => {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false })
      }, 1800)
    })
  }

  getStyles = (node) => {
    let styles = this.massageStyles()

    let customStyles = camelcaseKeys(this.props.settings.get(node, Map()).toJS())
    Object.assign(styles[node], customStyles)

    return InlineStylePrefixer(styles[node])
  }

  render = () => {
    return (
        this.props.settings.get('code_enabled') &&
        <div className='welcome-coupon' style={this.getStyles('container')}>
          <div className='welcome-coupon--code copy-trigger' style={this.getStyles('code')} data-clipboard-target={this.state.copyTrigger}>
            <span id='welcome-coupon--value'>{this.props.couponCode}</span>
          </div>
          <div className='welcome-coupon--button copy-trigger' style={this.getStyles('button')} data-clipboard-target={this.state.copyTrigger}>
            {
              !this.state.copied
              ? <Icon name='icon-files-4' height='16' width='16' fill={this.props.settings.getIn(['icon', 'fill'])} />
              : <Icon name='icon-check-1-1' height='16' width='16' fill={this.props.settings.getIn(['icon', 'fill'])} />
            }
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { integration, coupon } = state

  return {
    settings: integration.getIn(['data', 'config', 'customizations', 'coupon_code']),
    couponCode: coupon.get('code')
  }
}

export default connect(mapStateToProps)(WelcomeCoupon)
