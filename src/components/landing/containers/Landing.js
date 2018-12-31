import React from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import Grid from 'landing/components/Grid'
import Block from 'landing/components/Block'
import StyledDiv from 'common/styled/StyledDiv'
import { projects } from 'shared/selectors'

const Landing = props => {

  const getProjects = () => {
    return props.projects.map((project, index) => {
      return <Block
        key={index}
        title={project.get('title')}
        path={project.get('path')}
        poster={project.get('poster')}
        author={project.get('author')}
      />
    })
  } 

  const wrapperStyles = Immutable.fromJS({
    width: '100vw',
    maxWidth: '1100px',
    margin: '0 auto',
  })

  const heroStyles = Immutable.fromJS({
    height: 'calc(80vw * (9/16))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    h1: {
      fontWeight: '100',
      marginBottom: '0'
    }
  })

  return (
    <StyledDiv css={wrapperStyles}>
      <StyledDiv css={heroStyles}>
        <div>
          <h1>Art & UI</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </StyledDiv>
      <Grid>    
        {getProjects()}  
      </Grid>
    </StyledDiv>
    )
  }

  const mapStateToProps = state => {
    return {
      projects: projects(state)
    }
}

export default connect(mapStateToProps)(Landing)
