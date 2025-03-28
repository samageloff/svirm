import React from 'react'
import { Link } from 'react-router-dom'
import Immutable from 'immutable'
import StyledDiv from 'common/styled/StyledDiv'
import StyledLi from 'common/styled/StyledLi'

const Block  = props => {

  const wrapperStyle = () => Immutable.fromJS({
  })

  const figureStyle = Immutable.fromJS({
    background: `url(${props.poster})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    position: 'relative',
    opacity: '1',
    transition: 'opacity .35s',
    '&:hover': {
      opacity: '.8',
    },
    '&:after': {
      content: "''",
      display: 'block',
      paddingBottom: '75%'
    }
  })

  const descriptionStyle = Immutable.fromJS({
    bottom: '1.5em',
    background: 'black',
    color: 'white',
    left: '1.5em',
    padding: '1em 2em',
    position: 'absolute',
    h2: {
      lineHeight: '1em',
      margin: '0 0 4px'
    }
  })

  return (
    <StyledLi css={wrapperStyle()}>
      <Link to={props.path}>
        <StyledDiv css={figureStyle}>
          <StyledDiv css={descriptionStyle}>
            <h2>{props.author}</h2>
            <span>{props.title}</span>
          </StyledDiv>
        </StyledDiv>
      </Link>
    </StyledLi>
  )
}

export default Block
