import { Map } from 'immutable'
import { palatte } from 'julio/styles/colors'

export const projectStyle = project => Map({
  background: project === 'julio' || project === 'instability' ? palatte.gradient : 'none',
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  width: '100%',
  zIndex: '1'
})