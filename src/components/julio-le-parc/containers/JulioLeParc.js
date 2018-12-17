import React, { Component } from 'react'
import { Map } from 'immutable'
import StyledDiv from 'common/styled/StyledDiv'
import Column from 'julio/components/Column'
import { palatte } from 'julio/styles/colors'

let matrix = 17
let gridSize = 40

const baseStyles = Map({
  background: palatte.gradient,
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  height: `${matrix * gridSize}px`,
  margin: '0 auto',
  width: `${matrix * gridSize}px`
})

export class JulioLeParc extends Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <StyledDiv css={baseStyles}>
        <Column matrix={matrix} />
      </StyledDiv>
    )
  }
}

export default JulioLeParc
