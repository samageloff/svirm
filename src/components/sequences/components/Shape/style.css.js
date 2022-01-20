import styled from 'styled-components'

export const ShapeStyle = styled.div.attrs(props => ({
  style: {
    transform: `rotate(${props.rotate}) translatez(0)`
  }
}))`
  background: #FFF;
  opacity: .5;
  height: 65px;
  transition: transform .8s ease-in-out;
  width: 4px;
  margin: 2px;
`
