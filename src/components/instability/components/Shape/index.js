import React from 'react'
import { ShapeWrapper, ShapeStyle } from './style.css'

export const Shape = props => (
  <ShapeWrapper>
    <ShapeStyle rotate={props.rotate} />
  </ShapeWrapper>
)

export default Shape
