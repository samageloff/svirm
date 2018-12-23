import { Map } from 'immutable'
import { palatte } from 'julio/styles/colors'

export const columnStyles = Map({
  alignContent: 'baseline',
  boxShadow: `0 0 0 .5px ${palatte.lines}`,
  display: 'flex',
  flexDirection: 'column-reverse',
  flexWrap: 'wrap',
  height: '100%'
})
