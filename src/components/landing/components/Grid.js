import React, { Component } from 'react'
import Immutable from 'immutable'
import StyledDiv from 'common/styled/StyledDiv'
import StyledUl from 'common/styled/StyledUl'

const Grid = props => {

  const listStyle = () => Immutable.fromJS({
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 2fr))',
    gridGap: '2em',
    width: '100%' ,
    listStyleType: 'none',
    padding: '0',
    margin: '0'
  })

  return (
    <StyledUl css={listStyle()}>
      {props.children}
    </StyledUl>
  )
}

export default Grid
