import React, { Component } from 'react'
import { Map } from 'immutable'
import StyledDiv from 'common/styled/StyledDiv'
import StyledSpan from 'common/styled/StyledSpan'

let matrix = 17
let squareGrid = 5
let gridSize = 40

const grid = Math.pow(matrix, 2)
const gridArray = Array.apply(null, {length: grid}).map(Number.call, Number)
const squareSize = gridSize / 4
const squareArray = Array.apply(null, {length: squareGrid}).map(Number.call, Number)

const colors = {
  primary: 'rgb(195, 215, 247)',
  secondary: 'rgb(6, 6, 10)',
  lines: 'rgb(165, 155, 33)',
  gradient: 'radial-gradient(rgb(206, 195, 247) 50%,rgb(234, 179, 179))'
}

const baseStyles = Map({
  background: colors.gradient,
  display: 'flex',
  flexWrap: 'wrap',
  height: `${matrix * gridSize}px`,
  margin: '0 auto',
  width: `${matrix * gridSize}px`
})

const gridStyles = Map({
  alignContent: 'baseline',
  boxShadow: '0 0 0 .5px red',
  display: 'flex',
  height: `${gridSize}px`,
  flexDirection: 'column-reverse',
  flexWrap: 'wrap',
  width: `${gridSize}px`
})

const squareStyles = Map({
  background: colors.primary,
  bottom: '1px',
  display: 'flex',
  left: '1px',
  position: 'relative',
  height: `${squareSize - .5}px`,
  width: `${squareSize - .5}px`
})

/*
[0] | 0
[1, 2] | 1
[3, 4, 5] | 2
[6, 7, 8, 9] | 3
[10, 11, 12, 13, 14] | 4
[15, 16, 17, 18, 19, 20] | 5
...

const count = Math.round(289 / 2) // 144
const accumulator = 0

*/

export class JulioLeParc extends Component {
  constructor(props) {
    super(props)
  }

  generateGrid = () => {
    return gridArray.map((square, index) => {
      return <StyledDiv key={`grid-${index}`} css={gridStyles}>
        {this.generateSquare()}
      </StyledDiv>
    })
  }

  generateSquare = () => {
    return squareArray.map((square, index) => {
      return <StyledSpan key={`square-${index}`} css={squareStyles} />
    })
  }

  render = () => {
    return (
      <StyledDiv css={baseStyles}>
        {this.generateGrid()}
      </StyledDiv>
    )
  }
}

export default JulioLeParc
