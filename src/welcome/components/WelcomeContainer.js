import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Immutable from 'immutable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateAffiliate } from 'welcome/actions/affiliate'
import { setCouponCode } from 'welcome/actions/coupon'
import InlineStylePrefixer from 'common/helpers/inline-style-prefixer'
import IFrame from 'ambassador-common/utilities/iframe'
import WelcomeLayoutBox from 'welcome/components/WelcomeLayoutBox'
import camelcaseKeys from 'camelcase-keys'

export class WelcomeContainer extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    actions: PropTypes.object.isRequired,
    container: ImmutablePropTypes.map.isRequired
  }

  componentWillMount = () => {

    // Add message listener for affiliate info
    IFrame.addMessageListener('affiliate', (message) => {
      this.props.actions.updateAffiliate(message.affiliate)
    })

    // Add message listener for affiliate info
    IFrame.addMessageListener('code', (message) => {
      this.props.actions.setCouponCode(message.code)
    })
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return !Immutable.is(nextProps.container, this.props.container)
  }

  getStyles = () => {
    let styles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderStyle: 'solid'
    }

    const customStyles = camelcaseKeys(this.props.container.toJS())
    Object.assign(styles, customStyles)

    return InlineStylePrefixer(styles)
  }

  render = () => {
    return (
      <div className='welcome-container' style={this.getStyles()}>
        <WelcomeLayoutBox />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { integration } = state

  return {
    container: integration.getIn(['data', 'config', 'customizations', 'layout', 'modal', 'container'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      setCouponCode,
      updateAffiliate
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer)
