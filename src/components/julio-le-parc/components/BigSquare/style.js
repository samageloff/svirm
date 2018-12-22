import { Map } from 'immutable'
import { palatte } from 'julio/styles/colors'

export const bigSquareStyle = flip => Map({
  opacity: '.85',
  boxShadow: `0 0 0 .5px ${palatte.lines}`,
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  top: '1px',
  transform: flip ? 'scaleX(-1)' : 'scaleX(1)',
  display: 'flex',
  position: 'relative',
  height: '40px',
  width: '40px',
})