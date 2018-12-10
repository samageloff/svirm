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

let accumulator = 0

const iterator = index => {
  index % matrix === 0 
    ? accumulator = 0
    : accumulator += 1

  return accumulator
}

export class Squares extends Component {
  constructor(props) {
    super(props)
  }

  getLittleSquares = n => {
    const littleSquareArray = Array.apply(null, {length: n}).map(Number.call, Number)

    return littleSquareArray.map(index => {
      return <em key={index} />
    })
  }

  indexToSquare = (row, index) => {
    let val = 0

    switch (row, index) {
      case row === 4 && (index >= 12 && index <= 15):
        val = index
      case row === 3 && (index >= 8 && index <= 11):
        val = index
      case row === 2 && (index >= 4 && index <= 7):
        val = index
      case row === 1 && (index >= 0 && index <= 3):
        val = index
    }

    return val
  }

  squareTemplate = index => {
    const row = {
      4: this.indexToSquare(4, index),
      3: this.indexToSquare(3, index),
      2: this.indexToSquare(2, index),
      1: this.indexToSquare(1, index)
    }

    return <StyledDiv key={index} css={bigSquare}>
      <StyledDiv css={littleSquare('flex-start', 'flex-end')}>
        {this.getLittleSquares(row[4])}
      </StyledDiv>
      <StyledDiv css={littleSquare('flex-end')}>
        {this.getLittleSquares(row[3])}
      </StyledDiv>        
      <StyledDiv css={littleSquare('flex-start', 'flex-end')}>
        {this.getLittleSquares(row[2])}
      </StyledDiv>        
      <StyledDiv css={littleSquare('flex-end')}>
        {this.getLittleSquares(row[1])}
      </StyledDiv>        
    </StyledDiv>
  }

  generateSquares = () => {
    const squareArray = Array.apply(null, {length: this.props.matrix}).map(Number.call, Number)

    return squareArray.map((square, index) => {
      return this.squareTemplate(index)
    })
  }

  render = () => {
    return (
      <StyledDiv>
        {this.generateSquares()}
      </StyledDiv>
    )
  }
}

export default Squares
