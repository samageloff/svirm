import React, { Component } from 'react'
import { Map } from 'immutable'
import StyledDiv from 'common/styled/StyledDiv'
import { palatte } from '../styles/colors'

const bigSquare = Map({
  background: palatte.primary,
  opacity: '.5',
  boxShadow: '0 0 0 .5px red',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  top: '1px',
  display: 'flex',
  position: 'relative',
  height: '40px',
  width: '40px',
})

const littleSquare = (justify, align) => Map({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'inherit',
  justifyContent: justify,
  alignItems: align,
  em: {
    background: palatte.secondary,
    display: 'flex',
    height: '10px',
    width: '10px'
  }
})

const arrayFromNumber = num => Array.apply(null, {length: num}).map(Number.call, Number)

const sliceArrayFrom = a => {
  if (a.length <= 4) {
    return [
      a.slice(a[0], a[4])
    ]
  }
  if (a.length >= 4 && a.length <= 8) {
    return [
      a.slice(a[0], a[4]),
      a.slice(a[4], a[8])
    ]
  }
  if (a.length >= 8 && a.length <= 12) {
    return [
      a.slice(a[0], a[4]),
      a.slice(a[4], a[8]),
      a.slice(a[8], a[12])
    ]
  }
  if (a.length >= 12 && a.length <= 16) {
    return [
      a.slice(a[0], a[4]), 
      a.slice(a[4], a[8]), 
      a.slice(a[8], a[12]), 
      a.slice(a[12], a[16])
    ]
  }
}

export class Squares extends Component {
  constructor(props) {
    super(props)
  }

  getLittleSquares = n => {
    const littleSquareArray = arrayFromNumber(n)

    return littleSquareArray.map(index => {
      return <em key={index} />
    })
  }

  squareTemplate = index => {
    const array = arrayFromNumber(index)
    const slice = sliceArrayFrom(array)

    const len = {
      slice3: slice[3] && slice[3].length,
      slice2: slice[2] && slice[2].length,
      slice1: slice[1] && slice[1].length,
      slice0: slice[0] && slice[0].length
    }

    return <StyledDiv key={index} css={bigSquare}>
      {
        len.slice3 &&
          <StyledDiv css={littleSquare('flex-start', 'flex-end')}>
            {this.getLittleSquares(len.slice3)}
          </StyledDiv>
      }
      {
        len.slice2 &&
          <StyledDiv css={littleSquare('flex-end')}>
            {this.getLittleSquares(len.slice2)}
          </StyledDiv>
      }
      {
        len.slice1 &&
          <StyledDiv css={littleSquare('flex-start', 'flex-end')}>
            {this.getLittleSquares(len.slice1)}
          </StyledDiv>
      }
      {
        len.slice0 &&
          <StyledDiv css={littleSquare('flex-end')}>
            {this.getLittleSquares(len.slice0)}
          </StyledDiv>
      }
      </StyledDiv>
  }

  generatedSquares = () => {
    const squareArray = arrayFromNumber(this.props.matrix)

    let slicedArray = squareArray.splice(1, this.props.index)
    let reversedArray = slicedArray.reverse()
  
    let mutatedSquareArray = reversedArray.concat(squareArray)

    return mutatedSquareArray.map((square, index) => {
      return this.squareTemplate(square)
    })
  }

  render = () => {
    return (
      <StyledDiv className='column'>
        {this.generatedSquares()}
      </StyledDiv>
    )
  }
}

export default Squares
