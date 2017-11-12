export const UPDATE_PROJECT = 'UPDATE_PROJECT'

const _updateProject = (project) => {
  return {
    type: UPDATE_PROJECT,
    project
  }
}


export const updateProject = (project) => {
  return dispatch => {
    dispatch(_updateProject(project))
  }
}
