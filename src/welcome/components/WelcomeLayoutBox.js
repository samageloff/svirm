import React, { Component } from 'react'
import CloseButton from 'common/components/CloseButton'
import WelcomeHeader from './WelcomeHeader'
import WelcomeAvatar from './WelcomeAvatar'
import WelcomeCoupon from './WelcomeCoupon'
import WelcomeFooter from './WelcomeFooter'

export class WelcomeLayoutBox extends Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate = () => {
    return false
  }

  render = () => {
    return (
      <div style={{'height': '100%', 'width': '100%'}}>
        <CloseButton />
        <WelcomeAvatar />
        <WelcomeHeader />
        <WelcomeCoupon />
        <WelcomeFooter />
      </div>
    )
  }
}

export default WelcomeLayoutBox
