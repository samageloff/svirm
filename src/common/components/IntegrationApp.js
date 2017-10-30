import React, { Component } from 'react'
import IntegrationContainer from './IntegrationContainer'
import style from 'common/styles/base'
import IFrame from 'ambassador-common/utilities/iframe'
import svg4everybody from 'svg4everybody'

export class IntegrationApp extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount = () => {
    IFrame.connect()
    svg4everybody()
  }

  shouldComponentUpdate = () => {
    return false
  }

  render = () => {
    return (
      <div>
        <IntegrationContainer>
          {this.props.children}
        </IntegrationContainer>
      </div>
    )
  }
}

export default IntegrationApp
