import React from 'react'
import { connect } from 'react-redux'
import Grid from 'landing/components/Grid'
import Block from 'landing/components/Block'
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
  
  return (
    <Grid>    
      {getProjects()}  
    </Grid>
    )
  }

  const mapStateToProps = state => {
    return {
      projects: projects(state)
    }
}

export default connect(mapStateToProps)(Landing)
