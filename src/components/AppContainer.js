import React, { Component } from 'react'
import style from 'common/styles/base'

export class AppContainer extends Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate = () => {
    return false
  }

  render = () => {
    return (
      <div>
        This is Boilerplate. 🔥
      </div>
    )
  }
}

export default AppContainer
