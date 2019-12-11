import React from 'react'
import { Background } from 'instability/styles'
import { Shape } from 'instability/components/Shape'
import { Columns, ColWrapper } from './style.css'

const gridSize = 8
const degrees = 45

/**
 * isAfterSplit
 * @params arr Array
 * @params index Number
 * 
 * isAfterSplit([1, 2, 3, 4], 3) => true
 * isAfterSplit([1, 2, 3, 4], 2) => false
**/
const isAfterSplit = (arr, index) => (arr.length / 2) + 1 <= index

/**
 * getRotation
 * @params num String
 * 
 * rotate(12) => '180deg'
**/
const getRotation = num => `${degrees * num}deg`

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

// Generate an array
const gridArray = generateArray(gridSize, 0)

// Initalize counter at -1
let counter = -1

const getShapes = yAxis => gridArray.map((item, index, array) => {
  let rotation

  rotation = isAfterSplit(array, index)
    ? counter = counter - 1
    : counter = counter + 1

  console.log('yAxis', yAxis, 'index', index, 'rotation', rotation)
  
  return <Shape className='shape' key={index} rotate={getRotation(rotation)} />
})

const generateColumns = () => gridArray.map((index) => {
  const yAxis = index
  
  return <ColWrapper className='col-wrapper' key={index}>
    {getShapes(yAxis)}
    </ColWrapper>
})

export const Instability = props => {  
  return (
    <Background className='background'>
      <Columns className='columns' number={gridSize}>
        {generateColumns()}
      </Columns>
    </Background>
  )
}

export default Instability
