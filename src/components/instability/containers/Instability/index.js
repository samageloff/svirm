import React, { Fragment, useState } from 'react'
import { Background, Sliders } from 'instability/styles'
import { Shape } from 'instability/components/Shape'
import { Wrapper, List } from './style.css'

export const Instability = () => {
  const [gridSize, setGridSize] = useState(13)
  const [degrees, setDegrees] = useState(15)

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

  const handleChangeDegrees = event => setDegrees(parseInt(event.target.value))
  const handleChangeGridSize = event => setGridSize(parseInt(event.target.value))

  const setAutoDegree = () => {
    let increment = 0
    
    const degreeInterval = setInterval(() => {      
      setDegrees(increment = increment + 15)
    }, 250)
    
    return degreeInterval
  }
  
  const cancelAutoDegree = () => clearInterval(degreeInterval)

  return (
    <Fragment>
      <Sliders>
        <fieldset>
          <legend><b>Controls</b></legend>
          <legend>Degrees</legend>
          <input type='range' min='0' max='360' value={degrees} onChange={handleChangeDegrees.bind(this)} />
          <legend>Grid</legend>
          <input type='range' min='8' max='32' value={gridSize} onChange={handleChangeGridSize.bind(this)} />
          
          <button onClick={setAutoDegree}>Auto</button>
          <button onClick={cancelAutoDegree}>Cancel</button>
        </fieldset>
      </Sliders>
     
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
    </Fragment>
  )
}

export default Instability
