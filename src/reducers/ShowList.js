import { SHOWS_LOADED } from '../constants/actionTypes'

const initialState = {
  shows: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOWS_LOADED:
      return action.payload
    default:
      return state
  }
}
