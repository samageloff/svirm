import styled from 'styled-components'
import { map } from 'react-immutable-proptypes'
import { Map } from 'immutable'

export const StyledDiv = styled.div`
  ${props => props.css.toJS()}
`

StyledDiv.defaultProps = {
  css: Map()
}

StyledDiv.propTypes = {
  css: map
}

export default StyledDiv
