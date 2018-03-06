import { EPISODE_SELECTED } from '../constants/actionTypes'

const initialState = {
  episode: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case EPISODE_SELECTED:
      return action.payload
    default:
      return state
  }
}

