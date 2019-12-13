import styled from 'styled-components'

export const palatte = {
  background: 'rgba(229, 217, 211, 0)',
  shapes: 'rgb(14, 14, 16)'
}

export const Background = styled.div`
  background: ${palatte.background};
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
`

export const Sliders = styled.div`
  position: absolute;
  padding: 1em;
  top: 1em;
  left: 1em;
`