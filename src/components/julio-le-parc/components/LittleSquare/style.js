import { Map } from 'immutable'

export const littleSquareStyle = (justify, align) => Map({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'inherit',
  justifyContent: justify,
  alignItems: align,
  em: {
    background: 'black',
    display: 'flex',
    height: '10px',
    width: '10px'
  }
})