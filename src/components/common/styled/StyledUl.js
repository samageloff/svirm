import styled from 'styled-components'
import { map } from 'react-immutable-proptypes'
import { Map } from 'immutable'

export const StyledUl = styled.ul`
  ${props => props.css.toJS()}
`

StyledUl.defaultProps = {
  css: Map()
}

StyledUl.propTypes = {
  css: map
}

export default StyledUl
