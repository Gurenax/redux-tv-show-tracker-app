import { EPISODE_SELECTED } from '../constants/actionTypes'

const selectEpisode = episode => {
  console.log('Episode has been selected', episode.name)

  return {
    type: EPISODE_SELECTED,
    payload: episode
  }
}

export default selectEpisode
