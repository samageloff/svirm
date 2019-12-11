import { palatte } from 'instability/styles'
import styled from 'styled-components'

export const ShapeWrapper = styled.div`
  break-inside: avoid-column;
`

export const ShapeStyle = styled.div.attrs(props => ({
  style: {
    transform: `rotate(${props.rotate}) translatez(0)`
  }
}))`
  background: linear-gradient(to right, ${palatte.background} 20%, ${palatte.shapes} 0%);
  border-radius: 50%;
  height: 22px;
  transition: transform .8s ease-in-out;
  width: 22px;
  margin-bottom: 4px;
`
