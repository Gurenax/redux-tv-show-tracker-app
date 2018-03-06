import { SHOWS_LOADED } from '../constants/actionTypes'
import fetchShowList from '../api/shows'

/*
*   Success: fetch show list downloaded
*/
const loadShowListSuccess = showList => {
  return {
    type: SHOWS_LOADED,
    payload: { shows: showList }
  }
}

/*
*   Processing: fetch show list
*/
export const loadShowList = () => {
  return dispatch => {
    return fetchShowList().then(response => {
      dispatch(loadShowListSuccess(response))
    })
  }
}