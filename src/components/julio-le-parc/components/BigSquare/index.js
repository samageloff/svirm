import React, { Component } from 'react'
import StyledDiv from 'common/styled/StyledDiv'

export class BigSquare extends Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <StyledDiv>
        {this.generatedBigSquare()}
      </StyledDiv>
    )
  }
}

export default BigSquare
