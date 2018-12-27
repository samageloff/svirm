import styled from 'styled-components'
import { map } from 'react-immutable-proptypes'
import { Map } from 'immutable'

export const StyledLi = styled.li`
  ${props => props.css.toJS()}
`

StyledLi.defaultProps = {
  css: Map()
}

StyledLi.propTypes = {
  css: map
}

export default StyledLi
