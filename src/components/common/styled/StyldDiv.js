import styled from 'styled-components'
import { map } from 'react-immutable-proptypes'
import { Map } from 'immutable'

export const StyldDiv = styled.div`
  ${props => props.css.toJS()}
`

StyldDiv.defaultProps = {
  css: Map()
}

StyldDiv.propTypes = {
  css: map
}

export default StyldDiv
