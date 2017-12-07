import styled from 'styled-components'
import { map } from 'react-immutable-proptypes'
import { Map } from 'immutable'

export const StyldButton = styled.button`
  ${props => props.css.toJS()}
`

StyldButton.defaultProps = {
  css: Map()
}

StyldButton.propTypes = {
  css: map
}

export default StyldButton
