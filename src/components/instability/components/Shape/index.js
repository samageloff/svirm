import React from 'react'
import { ShapeWrapper, ShapeStyle } from './style.css'

export const Shape = props => (
  <ShapeWrapper>
    <ShapeStyle transform={props.transform} />
  </ShapeWrapper>
)

export default Shape
