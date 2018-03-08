import { SHOW_SELECTED, EPISODES_LOADED } from '../constants/actionTypes'
import fetchEpisodeList from '../api/episodes'

export const selectShow = show => {
  return {
    type: SHOW_SELECTED,
    payload: { show: show, episodes: null }
  }
}

/*
*   SUCCESS: fetch episode list completed
*/
const loadEpisodeListSuccess = (show, episodes) => {
  return {
    type: EPISODES_LOADED,
    payload: { show: show, episodes: episodes }
  }
}

/*
*   PROCESSING: fetch episode list
*/
export const loadEpisodeList = show => {
  return dispatch => {
    return fetchEpisodeList(show.id).then(response => {
      const episodeListInReversedOrder = response.data.reverse()
      dispatch(loadEpisodeListSuccess(show, episodeListInReversedOrder))
    }).catch(error => {
      dispatch(loadEpisodeListSuccess(show, []))
    })
  }
}