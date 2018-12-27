import { Map } from 'immutable'
import { palatte } from 'julio/styles/colors'

export const littleSquareStyle = (justify, align) => Map({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'inherit',
  justifyContent: justify,
  alignItems: align,
  em: {
    background: palatte.primary,
    display: 'flex',
    height: '10px',
    width: '10px'
  }
})