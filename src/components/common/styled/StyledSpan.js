import styled from 'styled-components'
import { map } from 'react-immutable-proptypes'
import { Map } from 'immutable'

export const StyledSpan = styled.span`
  ${props => props.css.toJS()}
`

StyledSpan.defaultProps = {
  css: Map()
}

StyledSpan.propTypes = {
  css: map
}

export default StyledSpan
