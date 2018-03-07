import { SHOWS_LOADED } from '../constants/actionTypes'
import fetchShowList from '../api/shows'

/*
*   Success: fetch show list downloaded
*/
const loadShowListSuccess = (showList, searchKeyword, typing) => {
  return {
    type: SHOWS_LOADED,
    payload: { shows: showList, searchKeyword: searchKeyword, typing: typing }
  }
}

/*
*   Processing: fetch show list
*/
export const loadShowList = () => {
  return dispatch => {
    dispatch(loadShowListSuccess([], '', false))
  }
}

/*
*   Processing: fetch show list by search keyword
*/
export const searchShow = keyword => {
  return dispatch => {
    return fetchShowList(keyword).then(response => {
      dispatch(loadShowListSuccess(response.data, keyword, false))
    }).catch(error => {
      dispatch(loadShowListSuccess([], keyword, false))
    })
  }
}

/*
*   Change search keyword value
*/
export const changeSearchKeyword = (showList, keyword) => {
  return loadShowListSuccess(showList, keyword, true)
}