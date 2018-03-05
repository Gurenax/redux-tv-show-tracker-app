import { SHOW_SELECTED } from '../constants/actionTypes'

const ActiveShow = (state = null, action) => {
  console.log('ActiveShow called')
  switch (action.type) {
    case SHOW_SELECTED:
      return action.payload
    default:
      return state
  }
}

export default ActiveShow
