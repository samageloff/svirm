import React, { Component } from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import { map } from 'react-immutable-proptypes'
import { project } from 'src/selectors/project'
import StyledH1 from 'src/components/common/StyledH1'
import style from 'src/styles/base.scss'

export class Container extends Component {
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
        <StyledH1>This is Boilerplate. 🔥</StyledH1>
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

export default connect(mapStateToProps)(Container)
