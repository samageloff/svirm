import React, { Component } from 'react'
import { Background } from 'instability/styles'
import { Shape } from 'instability/components/Shape'

const _transform = (index, increment) => {
  console.log(index, increment)
  return `${18 * (index + increment)}deg`
}

export const Instability = props => {
  const list = increment => {
    const array = new Array(26).fill({})

    return array.map((item, index) => <Shape key={index} transform={_transform(index, increment)} />)
  }

  const grid = () => {
    const array = new Array(26).fill({})
    
    return array.map((item, index) => <div style={{display: 'flex'}}>{list(index)}</div>)
  }

  return (
    <Background>
      {grid()}
    </Background>
  )
}

export default Instability
