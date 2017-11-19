import styled from 'styled-components'
import { map } from 'react-immutable-proptypes'
import { Map } from 'immutable'

export const StyldH1 = styled.h1`
  ${props => props.css.toJS()}
`

StyldH1.defaultProps = {
  css: Map()
}

StyldH1.propTypes = {
  css: map
}

export default StyldH1
