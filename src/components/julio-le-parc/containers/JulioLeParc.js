import React, { Component } from 'react'
import StyledDiv from 'common/styled/StyledDiv'
import Column from 'julio/components/Column'
import { baseStyles } from './style'
import { globals } from 'julio/config'

export class JulioLeParc extends Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <StyledDiv css={baseStyles}>
        <Column matrix={globals.matrix} />
      </StyledDiv>
    )
  }
}

export default JulioLeParc
