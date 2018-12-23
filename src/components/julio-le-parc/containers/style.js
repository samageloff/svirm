import { Map } from 'immutable'
import { palatte } from 'julio/styles/colors'
import { globals } from 'julio/config'

export const baseStyles = Map({
  background: palatte.gradient,
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  height: `${globals.matrix * globals.gridSize}px`,
  margin: '0 auto',
  width: `${globals.matrix * globals.gridSize}px`
})