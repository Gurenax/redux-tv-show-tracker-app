import { SHOWS_LOADED } from '../constants/actionTypes'
import fetchShowList from '../api/shows'

/*
*   Success: fetch show list downloaded
*/
const loadShowListSuccess = (showList, searchKeyword) => {
  return {
    type: SHOWS_LOADED,
    payload: { shows: showList, searchKeyword: searchKeyword }
  }
}

/*
*   Processing: fetch show list
*/
export const loadShowList = () => {
  // console.log('loadShowList')
  return dispatch => {
    dispatch(loadShowListSuccess([], ''))
    // return fetchShowList().then(response => {
    //   // dispatch(loadShowListSuccess(response.data))
    //   dispatch(loadShowListSuccess([], ''))
    // }).catch(error => {
    //   dispatch(loadShowListSuccess([], ''))
    // })
  }
}

/*
*   Processing: fetch show list by search keyword
*/
export const searchShow = keyword => {
  // console.log('searchShow', keyword)
  return dispatch => {
    return fetchShowList(keyword).then(response => {
      dispatch(loadShowListSuccess(response.data, keyword))
    }).catch(error => {
      dispatch(loadShowListSuccess([], keyword))
    })
  }
}

/*
*   Change search keyword value
*/
export const changeSearchKeyword = (showList, keyword) => {
  return loadShowListSuccess(showList, keyword)
}