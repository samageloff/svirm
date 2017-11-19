import styled from 'styled-components'
import { map } from 'react-immutable-proptypes'
import { Map } from 'immutable'

export const StyldH2 = styled.h2`
  ${props => props.css.toJS()}
`

StyldH2.defaultProps = {
  css: Map()
}

StyldH2.propTypes = {
  css: map
}

export default StyldH2
