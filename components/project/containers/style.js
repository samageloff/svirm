import { Map } from 'immutable'

export const canvases = {
  julio: 'radial-gradient(rgb(245, 228, 193) 50%,rgb(219, 191, 163))',
  instability: 'rgb(222, 221, 212)',
  sequences: 'rgb(21, 21, 21)',
  general: 'none'
}

const getProjectCanvas = project => {
  const canvas = {
    julio: canvases.gradient,
    instability: canvases.instability,
    sequences: canvases.sequences,
    general: canvases.general
  }
    
  return canvas[project]
}

export const projectStyle = project => Map({
  background: getProjectCanvas(project),
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  width: '100%',
  zIndex: '1'
})