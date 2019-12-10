import styled from 'styled-components'

export const palatte = {
  background: 'rgba(229, 217, 211, 0)',
  shapes: 'rgb(14, 14, 16)'
}

export const Background = styled.div`
  background: ${palatte.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`
