import { EPISODE_SELECTED } from '../constants/actionTypes'

const ActiveEpisode = (state = null, action) => {
  console.log('ActiveEpisode called')
  switch (action.type) {
    case EPISODE_SELECTED:
      return action.payload
    default:
      return state
  }
}

export default ActiveEpisode
