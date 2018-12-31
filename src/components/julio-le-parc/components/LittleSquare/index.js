import React, { Component } from 'react'
import StyledDiv from 'common/styled/StyledDiv'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { arrayFromNumber, sliceArrayFrom } from 'julio/helpers'

export class LittleSquare extends Component {
  constructor(props) {
    super(props)
  }

  getLittleSquare = n => {
    const littleSquareArray = arrayFromNumber(n)

    return (
      <TransitionGroup>
      {
        littleSquareArray.map(index => {
          return <CSSTransition
            key={index}
            timeout={500}
            classNames='fade'>
            <em key={index} />
          </CSSTransition>
        })
      }
    </TransitionGroup>
    )
  }

  littleSquareTemplate = (index, square, arr) => {
    const array = arrayFromNumber(index)
    const slice = sliceArrayFrom(array)

    const len = {
      slice3: slice[3] && slice[3].length,
      slice2: slice[2] && slice[2].length,
      slice1: slice[1] && slice[1].length,
      slice0: slice[0] && slice[0].length
    }

    let flip = arr.includes(square + 1)

    if (len.slice0 === 0) {
      return <StyledDiv key={square} css={LittleSquare(flip)} />
    }

    return <StyledDiv key={square} css={LittleSquare(flip)}>
      {
        len.slice3 &&
          <StyledDiv css={littleSquare('flex-start', 'flex-end')}>
            {this.getLittleLittleSquare(len.slice3)}
          </StyledDiv>
      }
      {
        len.slice2 &&
          <StyledDiv css={littleSquare('flex-end')}>
            {this.getLittleLittleSquare(len.slice2)}
          </StyledDiv>
      }
      {
        len.slice1 &&
          <StyledDiv css={littleSquare('flex-start', 'flex-end')}>
            {this.getLittleLittleSquare(len.slice1)}
          </StyledDiv>
      }
      {
        len.slice0 &&
          <StyledDiv css={littleSquare('flex-end')}>
            {this.getLittleLittleSquare(len.slice0)}
          </StyledDiv>
      }
      </StyledDiv>
  }

  generatedLittleSquare = () => {
    const squareArray = arrayFromNumber(this.props.matrix)
    const originalArray = arrayFromNumber(this.props.matrix)

    let slicedArray = squareArray.splice(1, this.props.index)
    let reversedArray = slicedArray.reverse()
  
    let mutatedSquareArray = reversedArray.concat(originalArray).slice(0, this.props.matrix)

    return mutatedSquareArray.map((square, index) => {
      let indiciesToFlip = slicedArray

      return this.littleSquareTemplate(square, index, indiciesToFlip)
    })
  }

  render = () => {
    return (
      <StyledDiv>
        {this.generatedLittleSquare()}
      </StyledDiv>
    )
  }
}

export default LittleSquare
