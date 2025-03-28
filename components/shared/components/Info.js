import React, { Component } from 'react'
import { Map } from 'immutable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import StyledDiv from 'common/styled/StyledDiv'

const infoStyles = Map({
  background: 'black',
  color: 'white',
  padding: '1em',
  left: '3em',
  position: 'absolute',
  opacity: '0.9',
  zIndex: '20',
  h4: {
    margin: 0
  }
})

export class Info extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
  }

  shouldComponentUpdate = nextProps => {
    return false
  }

  render = () => (
    <StyledDiv css={infoStyles}>
      <h4>Julio La Parc</h4>
      <span>Séquences quantitatives - Acrylique sur toile</span>
    </StyledDiv>
  )
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({

    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)
