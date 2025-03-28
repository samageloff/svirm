import styled from 'styled-components'
import { map } from 'react-immutable-proptypes'
import { Map } from 'immutable'

export const StyledButton = styled.button`
  ${props => props.css.toJS()}
`

StyledButton.defaultProps = {
  css: Map()
}

StyledButton.propTypes = {
  css: map
}

export default StyledButton
