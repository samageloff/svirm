import React from 'react'
import { Background } from 'instability/styles'
import { Shape } from 'instability/components/Shape'
import { RowWrapper } from './style.css'

const _transformer = (incrementor, rowIndex) => {
  let modifiedIncrementor = incrementor
  
  if (incrementor === 2) {
    modifiedIncrementor = modifiedIncrementor + 1
  }
  
  return `${15 * modifiedIncrementor}deg`
}

const _generatedArray = new Array(26).fill({})

export const Instability = props => {  
  const list = index => {
    let incrementor = 0
    let direction = 'up'
    let rowIndex = index

    return _generatedArray.map((item, index) => {
      if (index === 0) {
        incrementor = 0
      } else {
        if (incrementor === 13) {
          direction = 'down'
        }
        if (incrementor === 0) direction = 'up'
        if (direction === 'up') incrementor = incrementor + 1
        if (direction === 'down') incrementor = incrementor - 1        
      }
            
      return <Shape key={index} transform={_transformer(incrementor, rowIndex)} />
    })
  }

  const grid = () => {
    return _generatedArray.map((item, index) => {
      return <RowWrapper key={index}>{list(index)}</RowWrapper>
    })
  }

  return (
    <Background>
      {grid()}
    </Background>
  )
}

export default Instability
