import { SHOWS_LOADED } from '../constants/actionTypes'

const initialState = {
  shows: null,
  searchKeyword: '',
  typing: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOWS_LOADED:
      return action.payload
    default:
      return state
  }
}
