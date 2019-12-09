import { palatte } from 'instability/styles'
import styled from 'styled-components'

export const ShapeWrapper = styled.div`
  margin: 2px;
`

export const ShapeStyle = styled.div`
  background: linear-gradient(to right, ${palatte.background} 20%, ${palatte.shapes} 0%);
  border-radius: 50%;
  height: 25px;
  transform: rotate(${props => props.transform});
  transition: transform .8s ease-in-out;
  width: 25px;
`