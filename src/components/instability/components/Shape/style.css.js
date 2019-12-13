import { palatte } from 'instability/styles'
import styled from 'styled-components'

export const ShapeStyle = styled.div.attrs(props => ({
  style: {
    transform: `rotate(${props.rotate}) translatez(0)`
  }
}))`
  background: linear-gradient(to right, ${palatte.background} 20%, ${palatte.shapes} 0%);
  border-radius: 50%;
  height: 23px;
  // transition: transform 1s ease-out;
  width: 23px;
  margin: 2px;
`
