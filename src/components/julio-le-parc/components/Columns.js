import React, { Component } from 'react'
import { number } from 'prop-types'
import { Map } from 'immutable'
import StyledDiv from 'common/styled/StyledDiv'
import Squares from './Squares'

const columnStyles = Map({
  alignContent: 'baseline',
  boxShadow: '0 0 0 .5px red',
  display: 'flex',
  flexDirection: 'column-reverse',
  flexWrap: 'wrap',
  height: '100%'
})

export class Columns extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    matrix: number
  }

  nodeListToArray = arr => [].slice.call(arr)

  generateColumns = () => {
    const columnArray = Array.apply(null, {length: this.props.matrix}).map(Number.call, Number)

    return columnArray.map((column, index) => {
      return <StyledDiv key={`grid-${index}`} css={columnStyles}>
        <Squares matrix={this.props.matrix} index={index} />
      </StyledDiv>
    })
  }

  render = () => {
    return (
      this.generateColumns()
    )
  }
}

export default Columns
