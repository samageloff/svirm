import React, { Component } from 'react'
import StyledDiv from 'common/styled/StyledDiv'
import { bigSquareStyle } from './style'
import { littleSquareStyle } from 'julio/components/LittleSquare/style'
import { arrayFromNumber, sliceArrayFrom } from 'julio/helpers'

export class BigSquare extends Component {
  constructor(props) {
    super(props)
  }

  getLittleSquares = n => {
    const littleSquareArray = arrayFromNumber(n)

    return littleSquareArray.map(index => {
      return <em key={index} />
    })
  }

  squareTemplate = (index, square, flipArr) => {
    const array = arrayFromNumber(index)
    const slice = sliceArrayFrom(array)

    const len = {
      slice3: slice[3] && slice[3].length,
      slice2: slice[2] && slice[2].length,
      slice1: slice[1] && slice[1].length,
      slice0: slice[0] && slice[0].length
    }

    let flip = flipArr.includes(square + 1)

    if (len.slice0 === 0) {
      return <StyledDiv key={square} css={bigSquareStyle(flip)} />
    }

    return <StyledDiv key={square} css={bigSquareStyle(flip)}>
      {
        len.slice3 &&
          <StyledDiv css={littleSquareStyle('flex-start', 'flex-end')}>
            {this.getLittleSquares(len.slice3)}
          </StyledDiv>
      }
      {
        len.slice2 &&
          <StyledDiv css={littleSquareStyle('flex-end')}>
            {this.getLittleSquares(len.slice2)}
          </StyledDiv>
      }
      {
        len.slice1 &&
          <StyledDiv css={littleSquareStyle('flex-start', 'flex-end')}>
            {this.getLittleSquares(len.slice1)}
          </StyledDiv>
      }
      {
        len.slice0 &&
          <StyledDiv css={littleSquareStyle('flex-end')}>
            {this.getLittleSquares(len.slice0)}
          </StyledDiv>
      }
      </StyledDiv>
  }

  generatedSquares = () => {
    const squareArray = arrayFromNumber(this.props.matrix)
    const originalArray = arrayFromNumber(this.props.matrix)

    let slicedArray = squareArray.splice(1, this.props.index)
    let reversedArray = slicedArray.reverse()
  
    let mutatedSquareArray = reversedArray.concat(originalArray).slice(0, 17)

    return mutatedSquareArray.map((square, index) => {
      let indiciesToFlip = slicedArray

      return this.squareTemplate(square, index, indiciesToFlip)
    })
  }

  render = () => {
    return (
      <StyledDiv>
        {this.generatedSquares()}
      </StyledDiv>
    )
  }
}

export default BigSquare
