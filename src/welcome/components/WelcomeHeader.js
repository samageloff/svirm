import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Immutable from 'immutable'
import InlineStylePrefixer from 'common/helpers/inline-style-prefixer'
import camelcaseKeys from 'camelcase-keys'
import { replaceMergeTags } from 'common/helpers/replace-merge-tags'

export class WelcomeHeader extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    header: PropTypes.string.isRequired,
    styles: ImmutablePropTypes.map.isRequired,
    couponCode: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    company: PropTypes.string,
    editorDemo: PropTypes.bool
  }

  shouldComponentUpdate = (nextProps) => {
    if (!Immutable.is(this.props.header, nextProps.header)) return true
    if (!Immutable.is(this.props.styles, nextProps.styles)) return true
    if (!Immutable.is(this.props.couponCode, nextProps.couponCode)) return true
    if (this.props.company != nextProps.company) return true
    if (this.props.firstName != nextProps.firstName) return true
    if (this.props.lastName != nextProps.lastName) return true
    if (this.props.editorDemo != nextProps.editorDemo) return true

    return false
  }

  getStyles = () => {
    let styles = {
    }

    const customStyles = camelcaseKeys(this.props.styles.toJS())
    Object.assign(styles, customStyles)

    return InlineStylePrefixer(styles)
  }

  getHeader = () => {
    let header = this.props.header

    if (!this.props.editorDemo) {
      header = replaceMergeTags(header, 'first_name', this.props.firstName)
      header = replaceMergeTags(header, 'last_name', this.props.lastName)
      header = replaceMergeTags(header, 'coupon_code', this.props.couponCode)
      header = replaceMergeTags(header, 'company', this.props.company)
    }

    return header
  }

  createMarkup = () => {
    return {__html: this.getHeader()}
  }

  render = () => {
    return (
      <div className='welcome-header' style={this.getStyles()} dangerouslySetInnerHTML={this.createMarkup()} />
    )
  }
}

const mapStateToProps = (state, props) => {
  const { affiliate, coupon, integration } = state

  return {
    couponCode: coupon.get('code'),
    firstName: affiliate.getIn(['data', 'first_name']),
    lastName: affiliate.getIn(['data', 'last_name']),
    company: affiliate.getIn(['data', 'company']),
    editorDemo: affiliate.getIn(['data', 'editor_demo']),
    header: integration.getIn(['data', 'config', 'customizations', 'content', 'header']),
    styles: integration.getIn(['data', 'config', 'customizations', 'layout', 'modal', 'header'])
  }
}

export default connect(mapStateToProps, null)(WelcomeHeader)
