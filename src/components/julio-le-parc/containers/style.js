import { Map } from 'immutable'
import { globals } from 'julio/config'

export const baseStyles = Map({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  height: `${globals.matrix * globals.gridSize}px`,
  margin: '0 auto',
  width: `${globals.matrix * globals.gridSize}px`
})