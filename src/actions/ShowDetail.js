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
      dispatch(loadEpisodeListSuccess(show, response))
    }).catch(error => {
      dispatch(loadEpisodeListSuccess(show, []))
    })
  }
}