import React, { Component } from 'react'
import { number } from 'prop-types'
import StyledDiv from 'common/styled/StyledDiv'
import { arrayFromNumber } from 'julio/helpers'
import BigSquare from 'julio/components/BigSquare'
import posed from 'react-pose'
import { columnStyles } from './style'

const SquareWrapper = posed.div({
  open: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: { x: '-100%', delay: 300 },
  initialPose: 'closed'
});

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
      return <SquareWrapper key={`grid-${index}`} css={columnStyles}>
        <BigSquare matrix={this.props.matrix} index={index} />
      </SquareWrapper>
    })
  }

  render = () => {
    return (
      this.generateColumn()
    )
  }
}

export default Column
