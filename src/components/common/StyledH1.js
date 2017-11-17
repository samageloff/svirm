import styled from 'styled-components'
import { map } from 'react-immutable-proptypes'
import { Map } from 'immutable'

export const StyledH1 = styled.h1`
  ${props => props.css.toJS()}
`

StyledH1.defaultProps = {
  css: Map()
}

StyledH1.propTypes = {
  css: map
}

export default StyledH1
