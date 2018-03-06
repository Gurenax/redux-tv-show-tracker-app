import { SHOW_SELECTED, EPISODES_LOADED } from '../constants/actionTypes'

const initialState = {
  show: null,
  episodes: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SELECTED:
      return action.payload
    case EPISODES_LOADED:
      return action.payload
    default:
      return state
  }
}
