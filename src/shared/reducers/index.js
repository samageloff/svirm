import Immutable from 'immutable'

import {
  NAV_TOGGLE
} from 'src/shared/actions'

export const defaultSharedState = Immutable.fromJS({
  data: {
    nav: {
      open: false
    },
    projects: [
      {
        key: 'julio',
        title: 'Séquences quantitatives - Acrylique sur toile',
        author: 'Julio Le Parc',
        path: '/project/julio-le-parc',
        poster: require('assets/posters/julio-le-parc.png')
      },
      {
        key: 'timer',
        title: 'Countdown Timer',
        author: 'Oleg Frolov',
        path: '/project/timer',
        poster: require('assets/posters/timer.png')
      }
    ]
  }
})

const navToggle = (state = defaultSharedState, action) => {
  switch (action.type) {
    case NAV_TOGGLE:
      return state.withMutations(map => {
        map.setIn(['data', 'nav', 'open'], !map.getIn(['data', 'nav', 'open']))
      })
    default:
      return state
  }
}

export default navToggle
