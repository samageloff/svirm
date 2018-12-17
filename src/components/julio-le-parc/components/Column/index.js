import React, { Component } from 'react'
import { number } from 'prop-types'
import StyledDiv from 'common/styled/StyledDiv'
import { arrayFromNumber } from 'julio/helpers'
import BigSquare from 'julio/components/BigSquare'
import { columnStyles } from './style'

export class Column extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    matrix: number
  }

  generateColumn = () => {
    const columnArray = arrayFromNumber(this.props.matrix)

    return columnArray.map((column, index) => {
      return <StyledDiv key={`grid-${index}`} css={columnStyles}>
        <BigSquare matrix={this.props.matrix} index={index} />
      </StyledDiv>
    })
  }

  render = () => {
    return (
      this.generateColumn()
    )
  }
}

export default Column
