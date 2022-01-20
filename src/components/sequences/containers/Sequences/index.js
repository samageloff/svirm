import React from 'react'
import { Background } from 'sequences/styles'
import { Shape } from 'sequences/components/Shape'
import { Wrapper, List } from './style.css'

const gridSize = 13
const degrees = 15

/**
 * getRotation
 * @params num String
 * 
 * rotate(12) => '180deg'
**/
const getRotation = num => `${degrees * num}deg`

/**
 * genShapes
 * @params start Number
 * @params reverse Bool
**/
const genShapes = (start, reverse = null) => {
  const generatedList = genList(start, reverse)
  
  return generatedList.map((rotation, index) => {
    return <Shape key={index} rotate={getRotation(rotation)} />
  })
}

/**
 * generateArray
 * @params length Number
 * @params start Number
 * 
 * generateArray(5, 2) => [2, 3, 4, 5, 6]
**/
const generateArray = (length, start) => {
  const arr = Array.from(Array(length), (x, index) => index + start)
  
  return arr
}

/**
 * genList
 * @params start Number
 * @params reverse Bool
**/
const genList = (start, reverse) => {
  return reverse
    ? generateArray(gridSize, start).reverse()
    : generateArray(gridSize, start)
}

/**
 * genShapeList
 * @params start Number
 * @params reverse Bool
**/
const genShapeList = (start, reverse) => {
  const list = genList(start, reverse)
  
  return list.map(index => {
    return <List className='list' key={index}>
      {genShapes(index)}
    </List>
  })
}

export const Sequences = props => {
  return (
    <Background>
      <Wrapper>
        {genShapeList(0)}
      </Wrapper>
      <Wrapper>
        {genShapeList(6, true)}
      </Wrapper>
      <Wrapper flip>
        {genShapeList(6, true)}
      </Wrapper>
      <Wrapper flip>
        {genShapeList(0)}
      </Wrapper>
    </Background>
  )
}

export default Sequences
