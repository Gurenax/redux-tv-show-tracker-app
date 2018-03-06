import { EPISODE_SELECTED } from '../constants/actionTypes'

export const selectEpisode = episode => {
  return {
    type: EPISODE_SELECTED,
    payload: episode
  }
}
