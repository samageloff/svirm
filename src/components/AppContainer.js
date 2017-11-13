import React, { Component } from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { map } from 'react-immutable-proptypes'
import { project } from 'common/selectors/project'
import style from 'common/styles/base'

export class AppContainer extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    project: map
  }

  shouldComponentUpdate = () => {
    return false
  }

  render = () => {
    return (
      <div>
        <h1>This is Boilerplate. 🔥</h1>
        <h2>Application state</h2>
        <code>{JSON.stringify(this.props.project.toJS())}</code>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    project: project(state)
  }
}

export default connect(mapStateToProps)(AppContainer)
